import { useNavigate } from "react-router-dom";

export default function Placeholder() {
  const navigate = useNavigate();

  const handleClick = async planet => {
    let postId;

    if (planet === "mercury") {
      postId = 1;
    } else if (planet === "venus") {
      postId = 2;
    }
    navigate(`${planet}/${postId}`);
  };

  return (
    <div>
      <button type='button' onClick={() => handleClick("mercury")}>
        Mercury
      </button>

      <button type='button' onClick={() => handleClick("venus")}>
        Venus
      </button>
    </div>
  );
}
