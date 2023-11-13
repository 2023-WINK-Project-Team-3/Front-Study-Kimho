import dummy from "../db/data.json";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Items = styled.li`
  color: blue;
  background-color: skyBlue;
  font-size: 20px;
  width: fit-content;
  text-align: center;
  margin: 10px auto;
`;

const Parent = styled.ul`
  text-align: center;
`;

export default function List() {
  console.log(dummy);
  return (
    <Parent className="list">
      {dummy.data.map((i) => (
        <Items key={i.id}>
          <Link to={`/day/${i.day}`}>Day: {i.day}</Link>
        </Items>
      ))}
    </Parent>
  );
}
