import { useEffect, useMemo, useRef, useState } from "react";
import useAuth from "../hook/useAuth";
import { Button } from "../components/Buttons";
import { io } from "socket.io-client";
import Peer from "peerjs";
const myPeer = new Peer(undefined, {
  host: "/",
  port: "3001",
});
const socket = io.connect("http://localhost:3000");
const roomId = 1;

const WebRTC = () => {
  const { auth } = useAuth();
  let localStream = null;
  let remoteStream = null;
  let peerConnexion = null;
  const userId = useMemo(() => auth?.id, [auth]);

  const [startStream, setStartStream] = useState(false);
  const localRef = useRef(null);
  const remoteRef = useRef(null);
  const configuration = {
    iceServers: [
      {
        urls: [
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
        ],
      },
    ],
    // iceCandidatePoolSize: 10,
  };

  const joinRoom = () => {
    myPeer.on("open", (id) => {
      socket.emit("join-room", {
        roomId,
        userId,
        userName: auth.name,
      });
    });
  };

  const connectTonewUser = (userId, stream) => {
    const call = myPeer.call(userId, stream);
    
    call.on('stream', userVideoStream => {
      addVideoStream(remoteRef,userVideoStream);
    });

    call.on('close', () => {
      remoteRef.current.close();
    })
  }

  const openUserMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      localStream = stream;
      localRef.current.srcObject = stream;

      myPeer.on('call', call => {
        call.answer(stream);
      })

      socket.on("user-connected", ({ userName, userId }) => {
        console.log(`user ${userName} joined the room`);
        connectTonewUser(userId, stream);
      });
    } catch (error) {
      console.error("Error opening video Camera", err);
    }
  };

  const init = async () => {
    openUserMedia();
  };

  const handleStartStream = () => {
    setStartStream((prev) => !prev);
    init();
  };

  useEffect(() => {
    joinRoom();
  }, []);

  return (
    <div className="text-white gap-10 p-4 flex items-center justify-center flex-col">
      <div className="flex gap-4">
        <div className="flex items-center justify-center gap-4 flex-col">
          <p className="text-subtitle-3 text-white">Local stream</p>
          <video
            ref={localRef}
            className="bg-white rounded-3xl w-[520px]"
            src=""
            autoPlay
            playsInline
            controls={false}
          ></video>
        </div>
        <div className="flex items-center justify-center gap-4 flex-col">
          <p className="text-subtitle-3 text-white">Remote stream</p>
          <video
            ref={remoteRef}
            className="bg-white rounded-3xl w-[520px]"
            src=""
            autoPlay
            playsInline
            controls={false}
          ></video>
        </div>
      </div>
      <Button
        text={startStream ? "Stop stream" : "Start stream"}
        handleClick={handleStartStream}
      />
    </div>
  );
};

export default WebRTC;
