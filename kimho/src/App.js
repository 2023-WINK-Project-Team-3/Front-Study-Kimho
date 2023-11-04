import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "KimHo";
  const user = { name: "HyukMan" };
  const google = {
    name: "Google",
    url: "https://google.com",
  };
  return (
    <div className="App">
      <h1 style={{ color: "#f0f", backgroundColor: "skyBlue" }}>
        Hello, {name}, <p>{user.name}</p>
      </h1>
      <a href={google.url}>{google.name}</a>
    </div>
  );
}

export default App;
