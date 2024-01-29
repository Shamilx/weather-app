import "../css/home.css";

// redux
import { useSelector } from "react-redux";
import { StoreType } from "../app/store";

// components
import WeatherCard from "../components/WeatherCard";
import { LocationWeather } from "../api/api";

// test data
// import data from '../data/data.json';

export default function Home() {
  const locations = useSelector(
    (state: StoreType) => state.locationsSlice.locations
  );
  
  // const locations = data;
  

  return (
    <div id="home" className="wcolor-white wcenter-content wmt-2">
      <div className="wtext-uppercase wfs-2rem wdisplay-flex walign-center">
        <p className="wtx-shadow">weatherapp</p>
        <p className="wml-auto wtx-shadow wtext-center hide-me-under-350px">
          check <br />
          your <br />
          weather
        </p>
      </div>
      <div className="wmt-2 search">
        <input className="search-input wcolor-white wfs-4" />
        <button className="clickable search-button wfs-2">Search</button>
      </div>
      <div id="weather-cards" className="wmt-2">
        {locations.map((location) => {
            return <WeatherCard location={location as LocationWeather} />;
          })}
      </div>
    </div>
  );
}
