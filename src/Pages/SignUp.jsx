import { useState } from "react";

function SignUp() {
  const url = "https://fake-insta-server.onrender.com/";
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [useName, userName] = useState("");
  const [post, setPost] = useState({});
  //   const [posts, setPosts] = useState([]);
  const handleSignUp = async (e) => {
    e.preventDefault();
    const res = await fetch(`${url}/users/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, name, password, city, age, gender }),
    });
    const data = res.json();
    console.log(data);
  };
  return (
    <div>
      <form>
        <input
          type=""
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {/* <input
          type=""
          placeholder="email"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        /> */}
        <input
          type=""
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type=""
          placeholder="passowrd"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type=""
          placeholder="age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type=""
          placeholder="gender"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <input
          type=""
          placeholder="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            handleSignUp(e);
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
