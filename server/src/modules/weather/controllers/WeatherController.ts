import { Request, Response } from "express";
import GetWeather from "../services/GetWeather";

export default class WeatherController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { latitude, longitude, units, days } = request.query;
    const getWeather = new GetWeather();
    const weather = await getWeather.execute({
      latitude: parseFloat(latitude as string),
      longitude: parseFloat(longitude as string),
      units: units as "metric" | "imperial",
      days: parseInt(days as string),
    });
    return response.json(weather);
  }
}
