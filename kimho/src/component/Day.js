import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day() {
  const day = useParams().day;
  const wordList = dummy.words.filter((word) => word.day == Number(day));

  return (
    <>
      <h2>Day: {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.id}</td>
              <td>{word.day}</td>
              <td>{word.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
