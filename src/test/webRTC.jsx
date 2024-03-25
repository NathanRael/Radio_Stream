// import { useEffect, useMemo, useRef, useState } from "react";
// import useAuth from "../hook/useAuth";
// import { Button } from "../components/Buttons";
// import { io } from "socket.io-client";
// const socket = io.connect("http://localhost:3000");
// const roomId = 1;

// const WebRTC = () => {
//   const { auth } = useAuth();
//   let localStream = null;
//   let remoteStream = null;
//   let peerConnexion = null;

//   let client = null;
//   let channel = null;
//   const userId = useMemo(() => auth?.id, [auth]);

//   const [startStream, setStartStream] = useState(false);
//   const localRef = useRef(null);
//   const remoteRef = useRef(null);
//   const configuration = {
//     iceServers: [
//       {
//         urls: [
//           "stun:stun1.l.google.com:19302",
//           "stun:stun2.l.google.com:19302",
//         ],
//       },
//     ],
//     // iceCandidatePoolSize: 10,
//   };

//   const joinRoom = () => {
//     socket.emit("join-room", {
//       roomId,
//       userId,
//       userName: auth.name,
//     });
//   };

//   const openUserMedia = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });

//       localStream = stream;
//       localRef.current.srcObject = stream;

//       createOffer();
//     } catch (error) {
//       console.error("Error opening video Camera", err);
//     }
//   };

//   const closeUserMedia = () => {
//     localRef.current.srcObject = null;
//     // if (localRef.current){
//     //   const tracks = localRef.current.getTrack();
//     //   tracks.forEach(track => {
//     //     track.stop();
//     //   });
//     // }
//   };

//   const createOffer = async () => {
//     peerConnexion = new RTCPeerConnection(configuration);

//     remoteStream = new MediaStream();
//     remoteRef.srcObject = remoteStream;

//     localStream.getTracks().forEach((track) => {
//       peerConnexion.addTrack(track, localStream);
//     });

//     peerConnexion.ontrack = (event) => {
//       event.streams[0].getTracks().forEach((track) => {
//         remoteStream.addTrack(track);
//       });
//     };

//     peerConnexion.onicecandidate = async (event) => {
//       if (event.candidate) {
//         console.log(`new ICE candidate :  ${event.candidate}`);
//       }
//     };

//     let offer = await peerConnexion.createOffer();
//     await peerConnexion.setLocalDescription(offer);

//     console.log(offer);
//   };

//   const init = async () => {};

//   const handleStartStream = () => {
//     setStartStream((prev) => !prev);
//     startStream ? closeUserMedia() : openUserMedia();
//     init();
//   };

//   useEffect(() => {
//     joinRoom();

//     socket.on("user-connected", ({ userName, userId }) => {
//       console.log(`${userName} has joinned the room`);
//       socket.broadcast.to()
//     });
//   }, []);

//   return (
//     <div className="text-white gap-10 p-4 flex items-center justify-center flex-col">
//       <div className="flex gap-4">
//         <div className="flex items-center justify-center gap-4 flex-col">
//           <p className="text-subtitle-3 text-white">Local stream</p>
//           <video
//             ref={localRef}
//             className="bg-white rounded-3xl w-[520px]"
//             src=""
//             autoPlay
//             playsInline
//             controls={false}
//           ></video>
//         </div>
//         <div className="flex items-center justify-center gap-4 flex-col">
//           <p className="text-subtitle-3 text-white">Remote stream</p>
//           <video
//             ref={remoteRef}
//             className="bg-white rounded-3xl w-[520px]"
//             src=""
//             autoPlay
//             playsInline
//             controls={false}
//           ></video>
//         </div>
//       </div>
//       <Button
//         text={startStream ? "Stop stream" : "Start stream"}
//         handleClick={handleStartStream}
//       />
//     </div>
//   );
// };

// export default WebRTC;
