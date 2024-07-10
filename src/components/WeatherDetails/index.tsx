import { useContext, useEffect, useState } from "react";
import { type Weather } from "../../api/weather";
import Icon from "../../components/Icon";
import {
  WeatherContext,
  WeatherContextType,
} from "../../contexts/WeatherProvider";
import { Colors, RGB } from "../../helpers/ColorsShadeDictonary";
import weatherIconDictonary from "../../helpers/WeatherIconDictonary";
import {
  ClickableSpan,
  Container,
  DetailsContainer,
  EmptyContainer,
  IconContainer,
  SubDetailsContainer,
} from "./styles";

type WeatherDetailsProps = {
  weather?: Weather;
  colors: Colors;
  description: string;
  showIcon: boolean;
  showDetails: boolean;
};

const WeatherDetails = ({
  weather,
  colors,
  description,
  showIcon,
  showDetails,
}: WeatherDetailsProps) => {
  const [actualColor, setActualColor] = useState<RGB>(colors.gray);

  const { unit, setUnit } = useContext(WeatherContext) as WeatherContextType;

  const unitHandler = () => {
    if (unit === "metric") setUnit("imperial");
    else setUnit("metric");
  };

  useEffect(() => {
    if (!weather) return setActualColor(colors.gray);

    let temp = weather.temp;
    let unit = weather.unit;

    if ((unit === "°C" && temp <= 15) || (unit === "°F" && temp <= 60))
      return setActualColor(colors.blue);
    else if ((unit === "°C" && temp >= 35) || (unit === "°F" && temp >= 95))
      return setActualColor(colors.red);
    else return setActualColor(colors.yellow);
  }, [weather]);

  return (
    <Container
      $red={actualColor.red}
      $green={actualColor.green}
      $blue={actualColor.blue}
      $hasMinHeight={showIcon}
    >
      {showIcon ? (
        <IconContainer>
          <Icon color="white" size={150}>
            {/* TODO: Check current time to show day/night icons */}
            {weather && weatherIconDictonary[weather.weatherId]}
          </Icon>
        </IconContainer>
      ) : (
        <EmptyContainer />
      )}
      <DetailsContainer>
        <span>{description}</span>
        <ClickableSpan
          onClick={unitHandler}
        >{`${weather?.temp}${weather?.unit}`}</ClickableSpan>
        {showDetails ? (
          <>
            <p>{weather?.description}</p>
            <SubDetailsContainer>
              <span>{`${weather ? "Vento: " + weather.wind : ""}`}</span>
              <span>{`${weather ? "Humidade: " + weather.humidity : ""}`}</span>
              <span>{`${weather ? "Pressão: " + weather.pressure : ""}`}</span>
            </SubDetailsContainer>
          </>
        ) : null}
      </DetailsContainer>
    </Container>
  );
};

export default WeatherDetails;
