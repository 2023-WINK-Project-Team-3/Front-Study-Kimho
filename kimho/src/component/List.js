import dummy from "../db/data.json";
import { Link } from "react-router-dom";

export default function List() {
  console.log(dummy);
  return (
    <ul className="list">
      {dummy.data.map((i) => (
        <li key={i.id}>
          <Link to={`/day/${i.day}`}>Day: {i.day}</Link>
        </li>
      ))}
    </ul>
  );
}
