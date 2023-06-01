import './App.css';
import { useEffect, useState } from 'react';
import { AiFillCloud } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"

function App() {
  const [detail, setDetail] = useState(null);
  const [search, setSearch] = useState("Delhi");
  const [city, setCity] = useState(search);

  const date = new Date();

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=316cb9c484e10d250e45f407423f3da0`)
  //     const resJ = await res.json();
  //     // console.log(resJ);

  //     setDetail(resJ);
  //   };
  //   fetchApi();
  // }, [search]);

  return (
    <div className='main'>
      <h1 className='text-center' style={{ color: "white" }}>Weather App</h1>
      <div className='text-center my-4'>

        <input type='search' placeholder='Enter Location' className='inp' onChange={(e) => { setCity(e.target.value) }} />
        <button className='searchbtn' onClick={(e) => { setSearch(city) }}><BsSearch/></button>
      </div>


      <div className='d-md-flex justify-content-center'>

        {!detail ? (<p>No Data Found</p>) : (
          <>
            <div className="my-box left-box">
              <h1>{(((detail.main.temp) - 32) * 5 / 9).toFixed(3)} C</h1>
              <h6>{date.toLocaleDateString("de-DE")}, {date.toLocaleDateString('en-US', { weekday: 'long' })}</h6>

              <h1 className='place'>{detail.name}, {detail.sys.country}</h1>
            </div>

            <div className="right-box my-box">

              <div className='icon'>
                <AiFillCloud />
                <p>{detail.weather[0].main}</p>
              </div>
              <div className='alignment'>
                <div>Min Temp</div>
                <div>{(((detail.main.temp_min) - 32) * 5 / 9).toFixed(3)} C</div>
              </div>

              <div className='alignment'>
                <div>Max Temp</div>
                <div>{(((detail.main.temp_max) - 32) * 5 / 9).toFixed(3)} C</div>
              </div>
              <div className='alignment'>
                <div>Humidity</div>
                <div>{detail.main.humidity}</div>
              </div>
              <div className='alignment'>
                <div>Visibility</div>
                <div>{detail.visibility}</div>
              </div>
              <div className='alignment'>
                <div>Wind Speed</div>
                <div>{detail.wind.speed}</div>
              </div>

            </div>

          </>)}
      </div>
    </div>
  );
}

export default App;
