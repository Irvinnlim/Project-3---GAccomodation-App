import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [userType,setUserType] = useState("user")
  const [redirect, setRedirect] = useState(false);


  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
        userType,
      });
      alert("Registration successful. Now you can log in");
      setRedirect(true);
    } catch (e) {
      alert("Registration failed. Please try again later");
    }
  }

  if (redirect) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mt-16">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
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
          <label>
          User Type: 
          </label>
          <select id="userType" value={userType} 
            onChange={(ev) => setUserType(ev.target.value)}>
            <option value="user">User</option>
            <option value="admin">Host</option>
          </select>

          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already have an account?{" "}
            <Link className="underline text" to={"/login"}>
              Go to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
