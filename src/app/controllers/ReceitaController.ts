import { Request, Response } from "express";

import { getCnpjDetails } from "@utils/MinhaReceita";

export async function getCnpjInfo(req: Request, res: Response) {
  const { cnpj } = req.query;

  const responseCnpjInfo = await getCnpjDetails(cnpj as string);

  if (responseCnpjInfo) {
    return res.status(200).send({ status: 200, data: responseCnpjInfo.data });
  } else {
    return res.status(404).send({
      status: 404,
      message: "CNPJ not found or CNPJ rejected by the IRS or that is MEI.",
    });
  }
}
