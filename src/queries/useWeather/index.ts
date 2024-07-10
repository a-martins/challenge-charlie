import { useQuery } from "react-query";
import getWeathersByGeoCode, { WeatherList } from "../../api/weather";

export type WeatherQuery = {
  latitude?: number;
  longitude?: number;
  unit?: string;
};

const useWeather = (query: WeatherQuery | undefined) => {
  return useQuery<WeatherList>({
    queryKey: ["weather", query?.latitude, query?.longitude, query?.unit],
    queryFn: getWeathersByGeoCode,
    staleTime: 5 * 60 * 1000,
    enabled: !!query?.latitude && !!query?.longitude,
  });
};

export default useWeather;
