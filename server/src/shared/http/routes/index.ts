import backgroundRouter from "@modules/background/routes/background.routes";
import geocodeRouter from "@modules/geocode/routes/geocode.routes";
import { Router } from "express";

const routes = Router();

routes.use("/background", backgroundRouter);
routes.use("/geocode", geocodeRouter);

export default routes;
