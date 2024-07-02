import backgroundRouter from "@modules/background/routes/background.routes";
import { Router } from "express";

const routes = Router();

routes.use("/background", backgroundRouter);

export default routes;
