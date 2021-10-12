import { Request, Response } from "express";
import { getCEPInformation } from "@utils/ViaCEP";

export async function getCepInfo(req: Request, res: Response) {
  const { cep } = req.query;

  if (cep) {
    const responseCEP = await getCEPInformation(cep as string);

    if (responseCEP) {
      return res.status(200).send({ status: 200, data: responseCEP });
    } else {
      return res
        .status(404)
        .send({ status: 404, message: "CEP not found in database!" });
    }
  } else {
    return res
      .status(400)
      .json({ status: 400, message: "No CEP was provided!" });
  }
}
