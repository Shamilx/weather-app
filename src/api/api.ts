import axios from "axios";

export interface LocationWeather {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
  };
}

const options = {
  method: "GET",
  url: "https://weatherapi-com.p.rapidapi.com/current.json",
  params: { q: "Sumgait" },
  headers: {
    "X-RapidAPI-Key": "97414137fdmshd23c808e0d2d72cp1f9f0djsn20a5d652da5f",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    headers: {
      'Cache-Control': 'no-cache'
    }
  },
};

export async function getWeather(option: string) {
  const myOptions = { ...options, params: { q: option } };


  try {
    const response = await axios.request(myOptions);
    return response;
  } catch (error) {
    console.log("error happened");
  }
}
