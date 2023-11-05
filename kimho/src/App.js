import "./App.css";
import Header from "./component/Header";
import List from "./component/List";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/day/:day" element={<Day />}></Route>
          <Route path="*" element={<EmptyPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
