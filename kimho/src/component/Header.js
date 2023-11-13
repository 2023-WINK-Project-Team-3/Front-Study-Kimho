import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  background-color: black;
  display: inline-box;
`;

export default function Header() {
  return (
    <div className="header">
      <Title>
        <Link to="/">WINK</Link>
      </Title>
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
