import { useEffect, useState } from "react";
import Input from "../../components/Input";
import useBackground from "../../queries/useBackground";
import useCurrentPlaceName from "../../queries/useCurrentPlaceName";
import { Container } from "./styles";

export type Coordinates = {
  latitude?: number;
  longitude?: number;
};

const Home = () => {
  const [userLocation, setUserLocation] = useState<Coordinates>();
  const [textInputValue, setTextInputValue] = useState<string>("");

  const { data: backgroundData } = useBackground();
  const { data: locationData } = useCurrentPlaceName(userLocation);

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
      <Input
        userLocation={userLocation}
        setUserLocation={setUserLocation}
        defaultValue={textInputValue}
      ></Input>
    </Container>
  );
};

export default Home;
