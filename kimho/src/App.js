// import logo from "./logo.svg";
import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import World from "./component/World";
//import styles from "./component/Hello.module.css";

function App() {
  return (
    <>
      <div className="App">
        <Hello />
        <Welcome />
        <World />
        <World />
      </div>

      <div className="box" />
    </>
  );
}

export default App;
