import { Router } from "express";
import { getCnpjInfo } from "@controllers/ReceitaController";

const ReceitaRoutes = Router();

ReceitaRoutes.get("/getCnpjInfo", getCnpjInfo);

export default ReceitaRoutes;
