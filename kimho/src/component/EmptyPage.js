import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  color: blue;
  background-color: skyBlue;
`;

export default function EmptyPage() {
  return (
    <>
      <Title>Invalid Page.</Title>
      <Link to="/">redo</Link>
    </>
  );
}
