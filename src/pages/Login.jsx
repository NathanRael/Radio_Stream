import { ButtonLg } from "../components/Buttons";
import { Input } from "../components/Inputs";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import { useContext, useState,useEffect } from "react";
import userExist from "../functions/userExist";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { allUser,getUser } = useContext(DataContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userExist(allUser,email)) {
      console.log("Account not found");
      setEmail("");
      setPassword("");
    } else {
      const currentUser = allUser.filter(
        (user) => user.email === email
      )[0];
      if (currentUser.password === password) {
        navigate(`/Profile/${currentUser.id}`);
      } else {
        console.log("Wrong password");
      }
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <section className="pb-4">
      <h1 className="text-center mx-auto text-subtitle-2 text-white my-[72px]">
        <span className="text-primary">Welcome</span> back
        <p className="text-lead text-white-60">We have been waiting for you</p>
      </h1>
      <form
        className="flex flex-col gap-10 items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col items-center gap-6">
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
        </div>
        <div className="w-[320px] md:w-[380px] flex flex-col gap-6">
          <ButtonLg text="Log in" color="btn-gradient-2" />
          <small className="text-small text-white">
            Don't have an account ?{" "}
            <Link
              to="/SignIn"
              className="text-primary underline cursor-pointer"
            >
              Sign in
            </Link>
          </small>
        </div>
      </form>
    </section>
  );
};

export default Login;
