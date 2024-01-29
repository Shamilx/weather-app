import { LocationWeather } from "../api/api";

// css
import "../css/weathercard.css";

// icons
import { CiCloudMoon } from "react-icons/ci";
import { WiBarometer } from "react-icons/wi";
import { TbWind } from "react-icons/tb";
import { IoRainyOutline } from "react-icons/io5";
import { CiTempHigh } from "react-icons/ci";

export default function WeatherCard(props: { location: LocationWeather }) {
  const location = props.location;

  return (
    <div
      id="weather-card"
      className={"wbox-shadow wflex-1 width-25 wp-1 ".concat(
        selectedBackground(location)
      )}
    >
      <div className="wdisplay-flex walign-center">
        <p className="wfs-2 wopacity-80">{location.location.country}</p>
        <label className="wml-auto">{location.location.localtime}</label>
      </div>
      <div className="wdisplay-flex walign-center">
        <p className="wfs-4">{location.location.name}</p>
        <div className="wdisplay-flex wml-auto wgap-5 wfs-09">
          <p>LAT: {location.location.lat}</p>
          <p>LON: {location.location.lon}</p>
        </div>
      </div>
      <div id="weather-properties" className="wdisplay-flex wmt-1 wgap-5 wrfs-5 wflex-wrap walign-center ">
        <div className="wdisplay-flex walign-center wgap-5 prop">
          <CiTempHigh />
          <label>{location.current.temp_c} </label>
        </div>
        <div className="wdisplay-flex walign-center wgap-5 prop">
          <WiBarometer />
          <label>{location.current.pressure_in}</label>
        </div>
        <div className="wdisplay-flex walign-center wgap-5 prop">
          <TbWind />
          <label>{location.current.wind_kph} kp/h</label>
        </div>
        <div className="wdisplay-flex walign-center wgap-5 prop">
          <IoRainyOutline />
          <label>{location.current.humidity}</label>
        </div>
      </div>
    </div>
  );
}

function selectedBackground(location: LocationWeather) {
  const background = {
    day: "wday-background",
    night: "wnight-background",
  };

  let selectedBackground;

  location.current.is_day === 1
    ? (selectedBackground = background.day)
    : (selectedBackground = background.night);

  return selectedBackground;
}
