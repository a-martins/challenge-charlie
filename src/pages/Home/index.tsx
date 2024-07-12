import { useContext, useEffect } from "react";
import Input from "../../components/Input";
import WeatherContainer from "../../components/WeatherContainer";
import {
  WeatherContext,
  WeatherContextType,
} from "../../contexts/WeatherProvider";
import useBackground from "../../queries/useBackground";
import useCurrentPlaceName from "../../queries/useCurrentPlaceName";
import useWeather from "../../queries/useWeather";
import { Container, MainContainer } from "./styles";

const Home = () => {
  const { coordinates, setCoordinates, unit, location, setLocation } =
    useContext(WeatherContext) as WeatherContextType;

  const { data: backgroundData } = useBackground();

  const { data: locationData } = useCurrentPlaceName({
    latitude: coordinates?.latitude,
    longitude: coordinates?.longitude,
  });

  const { data: weatherData } = useWeather({
    query: location,
    unit: unit,
  });

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ latitude, longitude });
        },
        (error) => {
          //TODO: Added Toast Notification
          //setTextInputValue("Error getting user location");
          console.error("Error getting user location", error);
        }
      );
    } else {
      //TODO: Added Toast Notification
      //setTextInputValue("Error getting user location");
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (locationData) {
      setLocation(
        `${locationData.city}, ${locationData.state}, ${locationData.country}`
      );
    } else {
      setLocation("");
    }
  }, [locationData]);

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <MainContainer id="app" role="main" $backgroundUrl={backgroundData?.url}>
      <Container>
        <Input />
        <WeatherContainer weathers={weatherData?.weathers} />
      </Container>
    </MainContainer>
  );
};

export default Home;
