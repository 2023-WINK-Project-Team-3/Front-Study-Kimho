import dummy from "../db/data.json";

export default function List() {
  console.log(dummy);
  return (
    <ul className="list">
      {dummy.data.map((i) => (
        <li>Day {i.day}</li>
      ))}
    </ul>
  );
}
