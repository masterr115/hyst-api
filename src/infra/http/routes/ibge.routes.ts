import { Router } from "express";
import {
  getAllBrazilStates,
  getCitiesByState,
  getCityInfo,
  getStateInfo,
} from "@controllers/IbgeController";

const IbgeRoutes = Router();

IbgeRoutes.get("/getStates", getAllBrazilStates);
IbgeRoutes.get("/getCities", getCitiesByState);
IbgeRoutes.get("/getStateInfo", getStateInfo);
IbgeRoutes.get("/getCityInfo", getCityInfo);

export default IbgeRoutes;
