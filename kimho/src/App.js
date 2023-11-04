// import logo from "./logo.svg";
import "./App.css";
import Hello from "./component/Hello";
//import styles from "./component/Hello.module.css";

function App() {
  return (
    <>
      <div className="App">
        <Hello age={10} />
        <Hello age={20} />
        <Hello age={30} />
      </div>
    </>
  );
}

export default App;
