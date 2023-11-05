import { Link } from "react-router-dom";

export default function EmptyPage() {
  return (
    <>
      <h1>Invalid Page.</h1>
      <Link to="/">redo</Link>
    </>
  );
}
