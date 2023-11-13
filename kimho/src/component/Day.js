import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const TableItem = styled.td`
  color: blue;
  background-color: skyBlue;
  display: inline-box;
  font-size: 20px;
`;

const Title = styled.td`
  color: blue;
  background-color: skyBlue;
  display: inline-box;
  margin: 20px auto;
  font-size: 50px;
`;

export default function Day() {
  const day = useParams().day;
  const wordList = dummy.words.filter((word) => word.day == Number(day));

  return (
    <>
      <Title>Day: {day}</Title>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <TableItem>{word.id}</TableItem>
              <TableItem>{word.day}</TableItem>
              <TableItem>{word.content}</TableItem>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
