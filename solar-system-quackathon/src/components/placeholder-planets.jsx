import { Link } from "react-router-dom";

export default function Placeholder() {
  return (
    <div>
      <Link to='/placeholder-info'>
        <button type='button'>Mercury</button>
      </Link>
      <Link to='/placeholder-info'>
        <button type='button'>Venus</button>
      </Link>
      <Link to='/placeholder-info'>
        <button type='button'>Earth</button>
      </Link>
      <Link to='/placeholder-info'>
        <button type='button'>Mars</button>
      </Link>
    </div>
  );
}
