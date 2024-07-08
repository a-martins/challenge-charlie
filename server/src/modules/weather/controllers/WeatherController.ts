import { Request, Response } from "express";
import GetWeather from "../services/GetWeather";

export default class WeatherController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { latitude, longitude, unit } = request.query;
    const getWeather = new GetWeather();
    const weather = await getWeather.execute({
      latitude: parseFloat(latitude as string),
      longitude: parseFloat(longitude as string),
      units: unit as "metric" | "imperial",
    });
    return response.json(weather);
  }
}
