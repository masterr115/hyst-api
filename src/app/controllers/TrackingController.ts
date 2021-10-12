import { Request, Response } from "express";

import { searchCourier } from "@utils/PackageTracking";

export async function TrackPackage(req: Request, res: Response) {
  const { code } = req.query;

  if (code) {
    const Code_string = code as string;

    if (
      Code_string.match(
        /[A-Z][A-Z][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][A-Z][A-Z]$/g
      )
    ) {
      const responseCourier = await searchCourier(Code_string);

      if (responseCourier !== null) {
        return res
          .status(200)
          .send({ status: 200, data: responseCourier.data });
      } else {
        return res.status(429).send({
          status: 429,
          message: "Too many requests, wait before consulting another thing.",
        });
      }
    } else {
      res.status(400).json({ status: 400, message: "Code invalid!" });
    }
  } else {
    res.status(400).send({ status: 400, message: "Code was not provided" });
  }
}
