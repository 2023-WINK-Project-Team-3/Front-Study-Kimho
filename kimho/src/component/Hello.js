// const Hello = function () {
//     <p>Hello</p>
// }

// const Hello = () => {
//     // lambda expression.
// }
import styles from "./Hello.module.css";

export default function Hello() {
  function showName() {
    console.log("KimHo");
  }
  // (함수명+괄호): 값 반환
  // (함수명): 함수 실행 (콜백)

  function showText(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <h1>Welcome to Wink</h1>
      <button onClick={showName}>Name</button>
      <button onClick={() => console.log("Kimho2")}>Age</button>
      <br />
      <input type="text" onChange={(e) => showText(e)} />
    </>
  );
}
