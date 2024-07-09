import { PropsWithChildren } from "react";
import { type Weather } from "../../api/weather";
import {
  Container,
  DetailsContainer,
  EmptyContainer,
  IconContainer,
  SubDetailsContainer,
} from "./styles";

type Color = {
  red: string;
  green: string;
  blue: string;
};

type WeatherDetailsProps = {
  weather: Weather;
  color: Color;
  description: string;
  showIcon: boolean;
  showDetails: boolean;
};

const WeatherDetails = ({
  weather,
  color,
  description,
  showIcon,
  showDetails,
  children,
}: PropsWithChildren<WeatherDetailsProps>) => {
  return (
    <Container $red={color.red} $green={color.green} $blue={color.blue}>
      {showIcon ? (
        <IconContainer>{children}</IconContainer>
      ) : (
        <EmptyContainer />
      )}
      <DetailsContainer>
        <span>{description}</span>
        <span>{`${weather.temp}${weather.unit}`}</span>
        {showDetails ? (
          <>
            <p>{weather.description}</p>
            <SubDetailsContainer>
              <span>Vento: {weather.wind}</span>
              <span>Humidade: {weather.humidity}</span>
              <span>Pressão: {weather.pressure}</span>
            </SubDetailsContainer>
          </>
        ) : null}
      </DetailsContainer>
    </Container>
  );
};

export default WeatherDetails;
