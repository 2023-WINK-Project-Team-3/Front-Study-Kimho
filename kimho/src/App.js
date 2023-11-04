// import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Hello from "./component/Hello";
import List from "./component/List";
import Day from "./component/Day";
//import styles from "./component/Hello.module.css";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <List />
        <Day />
      </div>
    </>
  );
}

export default App;
