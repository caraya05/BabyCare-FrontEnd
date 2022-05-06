import FormBooking from "./FormBooking";
import BsList from "./BsList.js";
import "./Components/section.css";
export default function Section() {
  return (
    <div class="container">
      <div class="row ">
        <div class="col">
          <BsList />
        </div>
        <div class="col">
          <FormBooking />
        </div>
      </div>
    </div>
  );
}
