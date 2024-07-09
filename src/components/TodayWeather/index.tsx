import { type Weather } from "../../api/weather";
import Icon from "../../components/Icon";
import weatherIconDictonary from "../../helpers/WeatherIconDictonaary";
import {
  DetailsContainer,
  IconContainer,
  SubDetailsContainer,
  TodayContainer,
} from "./styles";

type TodayWeatherProps = {
  weather: Weather;
};

const TodayWeather = ({ weather }: TodayWeatherProps) => {
  return (
    <TodayContainer $red="232" $green="183" $blue="20">
      <IconContainer>
        <Icon color="white" size={150}>
          {weatherIconDictonary[weather.weatherId]}
        </Icon>
      </IconContainer>
      <DetailsContainer>
        <span>HOJE</span>
        <span>{`${weather.temp}${weather.unit}`}</span>
        <p>{weather.description}</p>
        <SubDetailsContainer>
          <span>Vento: {weather.wind}</span>
          <span>Humidade: {weather.humidity}</span>
          <span>Pressão: {weather.pressure}</span>
        </SubDetailsContainer>
      </DetailsContainer>
    </TodayContainer>
  );
};

export default TodayWeather;
