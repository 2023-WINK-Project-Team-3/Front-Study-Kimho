// const Hello = function () {
//     <p>Hello</p>
// }

// const Hello = () => {
//     // lambda expression.
// }
import styles from "./Hello.module.css";
import { useState } from "react";
import "./USerName";
import UserName from "./USerName";

export default function Hello(props) {
  // props are read-only fields.
  const [name, setName] = useState("Kim");
  const [age, setAge] = useState(props.age);
  const msg = age >= 19 ? "Adult" : "Minor";

  function changeName() {
    //document.getElementById("name").innerText += name;
    setName(name === "Kim" ? "Ho" : "Kim");
    setAge(age + 1);
  }

  return (
    <>
      <h1>Welcome to Wink</h1>
      <h2> Value of The Component</h2>
      <h3 id="name">{name}</h3>
      <h3>
        {age} old : {msg}
      </h3>
      <UserName name={name} />
      <button onClick={() => changeName()}>Click</button>
    </>
  );
}
