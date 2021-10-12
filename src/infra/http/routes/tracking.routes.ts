import { Router } from "express";

import { TrackPackage } from "@controllers/TrackingController";

const TrackingRoutes = Router();

TrackingRoutes.get("/packageTracking", TrackPackage);

export default TrackingRoutes;
