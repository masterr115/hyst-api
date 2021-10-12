import { Router } from "express";

const routes = Router();

import GeoIPRoutes from "./geoip.routes";
import IbgeRoutes from "./ibge.routes";
import ReceitaRoutes from "./receita.routes";
import TrackingRoutes from "./tracking.routes";
import ViaCepRoutes from "./viacep.routes";

routes.get("/", (req, res) => {
  return res.send("HystAPI running! Hello world!");
});

routes.use("/v1", GeoIPRoutes);
routes.use("/v1", IbgeRoutes);
routes.use("/v1", ReceitaRoutes);
routes.use("/v1", TrackingRoutes);
routes.use("/v1", ViaCepRoutes);

export default routes;
