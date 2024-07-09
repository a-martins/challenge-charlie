import { type Weather } from "../../api/weather";
import TodayWeather from "../TodayWeather/";
import { WeatherContainer } from "./styles";

type WeatherProps = {
  weathers?: Array<Weather>;
};

const WeatherBox = ({ weathers }: WeatherProps) => {
  if (!weathers) {
    return <div>No data found!</div>;
  }

  return (
    <WeatherContainer>
      <TodayWeather weather={weathers[0]} />
    </WeatherContainer>
  );
};

export default WeatherBox;
