import Efecto from "./Efecto";
import "./Home.css";

export default function Home() {
  return (
    <header>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
        crossorigin="anonymous"
      ></link>

      <div class="img">
        <section class="textos-header">
          <h1 class={"titulo"}>BabyCare</h1>
        </section>
        <div class="wave" style={{ height: "150px", overflow: "hidden" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "rgb(255, 255, 255)" }}
            ></path>
          </svg>
        </div>
      </div>
      {/*<Efecto /> */}
    </header>
  );
}
