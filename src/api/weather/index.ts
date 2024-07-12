import { QueryKey, QueryOptions } from "react-query";

export type Weather = {
  weatherId: number;
  temp: number;
  unit: string;
  description: string;
  wind: string;
  humidity: string;
  pressure: string;
};

export type WeatherList = {
  weathers: Array<Weather>;
};

const getWeathers = ({ queryKey }: QueryOptions): Promise<WeatherList> => {
  const [_, query, unit] = queryKey as QueryKey;
  return new Promise<WeatherList>((resolve, reject) => {
    return fetch(
      `${
        process.env.REACT_APP_API_BASE_URL as string
      }/weather?query=${query}&unit=${unit}`
    )
      .then((res) => {
        return res.json();
      })
      .then((weathers) => {
        return resolve(weathers);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export default getWeathers;
