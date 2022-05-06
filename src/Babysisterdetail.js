import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import "./Components/details.css";

export default function Babysisterdetail() {
  const { id } = useParams();

  const [bsdata, setBsdata] = useState([]);
  const fetchdata = () => {
    axios.get(`https://localhost/api/baby_sister/${id}`).then((res) => {
      setBsdata(res.data);
      console.log(res.data);
    });
  };
  useEffect(function () {
    fetchdata();
  }, []);
  return (
    <div class="content">
      <div class="card">
        {console.log(bsdata.name)}
        <div class="firstinfo">
          <img src={require("./Components/profilepic.jpeg")} />
          <div class="profileinfo">
            <h1>
              {bsdata.name} {bsdata.last_name}
            </h1>
            <h3>Niñera</h3>
            <p class="bio">Telefono: {bsdata.phone}</p>
            <p class="bio">Cumpleaños: {bsdata.date_b}</p>
          </div>
        </div>
      </div>
      <div class="badgescard">
        <span ></span>
      </div>
    </div>
  );
}
