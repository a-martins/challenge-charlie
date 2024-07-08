import ConvertToDirection from "@shared/helpers/functions/DegreeToDirectionConverter";
import UpperCaseConverter from "@shared/helpers/functions/UpperCaseConverter";

const axios = require("axios").default;

type Request = {
  latitude: number;
  longitude: number;
  units: "metric" | "imperial";
  days: number;
};

type Weather = {
  weatherId: number;
  temp: number;
  unit: string;
  description: string;
  wind: string;
  humidity: string;
  pressure: string;
};

type WeatherResponse = {
  weathers: Array<Weather>;
};

class GetWeather {
  public execute({
    latitude,
    longitude,
    units,
    days,
  }: Request): Promise<WeatherResponse> {
    return new Promise<WeatherResponse>(async (resolve, reject) => {
      try {
        const url = process.env.REACT_APP_OPEN_WEATHER_URL as string;
        const apiKey = process.env.REACT_APP_OPEN_WEATHER_APIKEY as string;
        const response = (await axios
          .get(
            `${url}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}&cnt=${days}&lang=pt_br`
          )
          .then((response) => {
            if (response.status === 200) {
              let formattedData = response.data?.list.map((item) => {
                return {
                  weatherId: item.weather[0].id,
                  temp: +item.main.temp.toFixed(0),
                  unit: units === "metric" ? "°C" : "°F",
                  description: UpperCaseConverter(item.weather[0].description),
                  wind: `${ConvertToDirection(
                    item.wind.deg
                  )} ${item.wind.speed.toFixed(1)}km/h`,
                  humidity: `${item.main.humidity}%`,
                  pressure: `${item.main.pressure}hPA`,
                };
              });
              return {
                weathers: formattedData,
              };
            } else {
              throw new Error("Error getting Weather");
            }
          })) as WeatherResponse;
        resolve(response);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }
}

export default GetWeather;
