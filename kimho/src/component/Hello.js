// const Hello = function () {
//     <p>Hello</p>
// }

// const Hello = () => {
//     // lambda expression.
// }
import World from "./World";
import styles from "./Hello.module.css";

export default function Hello() {
  return (
    <div>
      <h1
        style={{
          color: "#f00",
          border: "2px solid #111",
          marginTop: "10px",
          opacity: 1,
        }}
      >
        Wink Project
      </h1>
      <World />
      <div className={styles.box} />
    </div>
  );
}
