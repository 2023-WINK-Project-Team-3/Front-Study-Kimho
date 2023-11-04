import dummy from "../db/data.json";

export default function Day() {
  const day = 1;
  const wordList = dummy.words.filter((word) => word.day == day);

  return (
    <>
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
