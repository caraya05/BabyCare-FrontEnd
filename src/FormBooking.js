import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import "./Components/form.css";


export default function FormBooking() {
  const [postdata, setPostdata] = useState({
    schedule: "",
    name: "",
    document: "",
    phone: "",
    direction: ""
  });

  const handleChangeSchedule = (event) => {
      
    setPostdata({
      ...postdata,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeName = (event) => {
    setPostdata({
      ...postdata,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangeDocument = (event) => {
    setPostdata({
      ...postdata,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangePhone = (event) => {
    setPostdata({
      ...postdata,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangeDirection = (event) => {
    setPostdata({
      ...postdata,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmit = (event) => {
    console.log(postdata);   
    event.preventDefault();
    axios.post(`https://localhost/api/booking/`, postdata ).then((res) => {
      console.log(res);
    });
  };

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
    
    <aside>
      
      <div class="card1">
        
    <div id={"formulario"} class={"form-register"}>
      <form onSubmit={handleSubmit}>
        <h1><span>Reservas</span></h1>
        <select class="controls" id="schedule" name="schedule" onChange={handleChangeSchedule}>
            <option disabled selected> Horarios disponibles </option>
          {data?.map((item) => (
            <option  key={item.id} name={item.id} value={item.id}>              
              {item.day} / {item.start_hour} - {item.end_hour}
            </option>
          ))}
        </select>
        <input class="controls" name="name" onChange={handleChangeName} type="text" placeholder="Nombre"/>
        <input class="controls" name="document" onChange={handleChangeDocument} type="text" placeholder="Documento" />
        <input class="controls" name="phone" onChange={handleChangePhone} type="text" placeholder="Telefono" />
        <input class="controls" name="direction" onChange={handleChangeDirection} type="text" placeholder="Direccion"/>
        <input class="btn btn-light" type="submit" value="Reservar" />
        
      </form>
    </div>
    </div>
    </aside>
    
  );
}
