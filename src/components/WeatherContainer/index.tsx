import { type Weather } from "../../api/weather";
import colorsShadeDictonary from "../../helpers/ColorsShadeDictonary";
import WeatherDetails from "../WeatherDetails";
import { Container } from "./styles";

type WeatherProps = {
  weathers?: Array<Weather>;
};

const WeatherContainer = ({ weathers }: WeatherProps) => {
  return (
    <Container>
      <WeatherDetails
        weather={weathers ? weathers[0] : undefined}
        showIcon={true}
        showDetails={true}
        description="HOJE"
        colors={colorsShadeDictonary[0]}
      />
      <WeatherDetails
        weather={weathers ? weathers[1] : undefined}
        showIcon={false}
        showDetails={false}
        description="AMANHÃ"
        colors={colorsShadeDictonary[1]}
      />
      <WeatherDetails
        weather={weathers ? weathers[2] : undefined}
        showIcon={false}
        showDetails={false}
        description="DEPOIS DE AMANHÃ"
        colors={colorsShadeDictonary[2]}
      />
    </Container>
  );
};

export default WeatherContainer;
