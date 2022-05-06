import { Link } from "react-router-dom";
import "./Components/buttons.css";

export default function Babysister({ id, dia, horai, horaf }) {
  return (
    <div>
      <Link to={`/babysisterdetail/${id}`} style={{ textDecoration: "none" }}>
        <button class="button-87" role="button">
          {dia} <p></p>
          {horai}-{horaf}
        </button>
      </Link>
    </div>
  );
}
