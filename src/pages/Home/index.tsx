import { useEffect, useState } from "react";

type Coordinates = {
  latitude: number;
  longitude: number;
};

const Home = () => {
  const [userLocation, setUserLocation] = useState<Coordinates>();

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div id="app" role="main">
      Weather App!
      <p>latitude: {userLocation?.latitude}</p>
      <p>longitude: {userLocation?.longitude}</p>
    </div>
  );
};

export default Home;
