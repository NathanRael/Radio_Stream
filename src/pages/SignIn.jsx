import { useContext, useEffect, useRef, useState } from "react";
import { ButtonLg } from "../components/Buttons";
import { Input } from "../components/Inputs";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import userExist from "../functions/userExist";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const { allUser, setAllUser,getUser } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userExist(allUser,email, username)) {
      try {
        const datas = {
          name: username.toLowerCase(),
          email: email.toLowerCase(),
          password,
        };
        const response = await fetch("http://localhost/tuxt/api/user.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datas),
        });

        if (!response.ok) {
          throw new Error("Registration failed");
        }
        console.log(datas);
        const data = await response.json();
        console.log(data);

        navigate("/Login");
      } catch (error) {
        console.error("Error while fetching user profile : " + error);
        navigate("/Login");
      }
    } else {
      console.log("User already exist");
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <section className="pb-4" onSubmit={(e) => handleSubmit(e)}>
      <h1 className="text-center mx-auto text-subtitle-2 text-white my-[72px]">
        Dive into the world of{" "}
        <span className="text-primary">technologies</span>
      </h1>
      <form className="flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center gap-6">
          <Input
            title="Pseudo"
            type="text"
            placeholder="Enter your pseudo"
            name="pseudo"
            value={username}
            handleChange={(e) => setUsername(e.target.value)}
          />
          <Input
            title="Email"
            type="text"
            placeholder="Enter your email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <Input
            title="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Input
            title="Confirm"
            type="password"
            placeholder="Confirm your password"
            name="confirm"
            value={confirmPassword}
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="w-[320px] md:w-[380px] flex flex-col gap-6">
          <ButtonLg
            text="Sign in"
            color="btn-gradient-2"
          />
          <small className="text-small text-white">
            Already a member ?{" "}
            <Link to="/Login" className="text-primary underline cursor-pointer">
              Log in
            </Link>
          </small>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
