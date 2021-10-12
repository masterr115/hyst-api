import { Router } from "express";
import { getCepInfo } from "@controllers/ViaCepController";

const ViaCepRoutes = Router();

ViaCepRoutes.get("/getCEP", getCepInfo);

export default ViaCepRoutes;
