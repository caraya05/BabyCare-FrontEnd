import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Babysister from "./Babysister";

function BsList() {
  const [data, setData] = useState([]);

  const fetchdata = () => {
    axios
      .get(`https://localhost/api/schedule/schedule-available/`)
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(function () {
    fetchdata();
  }, []);

  return (
    <div>
      {data?.map((item) => (
        <Babysister
          key={item.baby_sister}
          id={item.baby_sister}
          horai={item.start_hour}
          horaf={item.end_hour}
          dia={item.day}
        />
      ))}
    </div>
  );
}

export default BsList;
