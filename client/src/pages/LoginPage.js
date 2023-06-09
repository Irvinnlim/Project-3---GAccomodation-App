import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);


  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const userInfo = await axios.post("/login", { email, password });
      setUser(userInfo);
      alert("Login successful");

      window.location.href = "/";
    } catch (e) {
      alert("Login failed");
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mt-16">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="email address"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Register new account!{" "}
            <Link className="underline text" to={"/register"}>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
