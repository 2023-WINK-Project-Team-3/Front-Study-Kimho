import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">WINK</Link>
      </h1>
      <div className="menu">
        <a href="#x" className="link">
          Kim
        </a>
        <span>&nbsp;&nbsp;</span>
        <a href="#x" className="link">
          Ho
        </a>
      </div>
    </div>
  );
}
