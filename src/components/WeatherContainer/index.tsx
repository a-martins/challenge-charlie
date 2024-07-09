import { type Weather } from "../../api/weather";
import WeatherDetails from "../WeatherDetails";
import { Container } from "./styles";

type WeatherProps = {
  weathers?: Array<Weather>;
};

const WeatherContainer = ({ weathers }: WeatherProps) => {
  if (!weathers) {
    return <div>No data found!</div>;
  }

  return (
    <Container>
      <WeatherDetails
        weather={weathers[0]}
        showIcon={true}
        showDetails={true}
        description="HOJE"
        color={{ red: "232", green: "183", blue: "20" }}
      />
      <WeatherDetails
        weather={weathers[1]}
        showIcon={false}
        showDetails={false}
        description="AMANHÃ"
        color={{ red: "249", green: "202", blue: "5" }}
      />
      <WeatherDetails
        weather={weathers[2]}
        showIcon={false}
        showDetails={false}
        description="DEPOIS DE AMANHÃ"
        color={{ red: "183", green: "148", blue: "4" }}
      />
    </Container>
  );
};

export default WeatherContainer;
