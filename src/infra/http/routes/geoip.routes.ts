import { Router } from "express";

import { getGeoIP } from "@controllers/GeoipController";

const GeoIPRoutes = Router();

GeoIPRoutes.get("/geoIP", getGeoIP);

export default GeoIPRoutes;
