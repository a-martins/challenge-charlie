import { useEffect, useState } from "react";
import Input from "../../components/Input";
import Weather from "../../components/Weather";
import useBackground from "../../queries/useBackground";
import useCurrentPlaceName from "../../queries/useCurrentPlaceName";
import useWeather from "../../queries/useWeather";
import { Container, WeatherContainer } from "./styles";

export type Coordinates = {
  latitude?: number;
  longitude?: number;
};

const Home = () => {
  const [userLocation, setUserLocation] = useState<Coordinates>();
  const [textInputValue, setTextInputValue] = useState<string>("");
  const [unit] = useState<"metric" | "imperial">("metric");

  const { data: backgroundData } = useBackground();
  const { data: locationData } = useCurrentPlaceName({
    latitude: userLocation?.latitude,
    longitude: userLocation?.longitude,
  });
  const { data: weatherData } = useWeather({
    latitude: userLocation?.latitude,
    longitude: userLocation?.longitude,
    unit: unit,
  });

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          setTextInputValue("Error getting user location");
          console.error("Error getting user location", error);
        }
      );
    } else {
      setTextInputValue("Error getting user location");
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (locationData) {
      setTextInputValue(`${locationData.city}, ${locationData.state}`);
    } else {
      setTextInputValue("");
    }
  }, [locationData]);

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <Container id="app" role="main" $backgroundUrl={backgroundData?.url}>
      <WeatherContainer>
        <Input
          userLocation={userLocation}
          setUserLocation={setUserLocation}
          defaultValue={textInputValue}
        />
        <Weather weathers={weatherData?.weathers} />
      </WeatherContainer>
    </Container>
  );
};

export default Home;
