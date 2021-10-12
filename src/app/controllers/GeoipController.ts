import { Request, Response } from "express";
import { getIPInfo } from "@utils/GeoIP";

export async function getGeoIP(req: Request, res: Response) {
  const { ip } = req.query;

  if (ip) {
    const responseIP = await getIPInfo(ip as string);

    if (responseIP) {
      return res.status(200).send({
        status: 200,
        data: {
          ipBusca: responseIP.query,
          pais: responseIP.country,
          paisSigla: responseIP.countryCode,
          regiaoSigla: responseIP.region,
          regiao: responseIP.regionName,
          cidade: responseIP.city,
          CEP: responseIP.zip,
          latitude: responseIP.lat,
          longetude: responseIP.lon,
          timezone: responseIP.timezone,
          moeda: responseIP.currency,
          provedor: responseIP.asname,
          ipReverso: responseIP.reverse,
          celular: responseIP.mobile,
          proxy: responseIP.proxy,
          hosting: responseIP.hosting,
        },
      });
    } else {
      return res
        .status(404)
        .send({ status: 404, message: "The IP provided was not found." });
    }
  } else {
    return res
      .status(400)
      .send({ status: 400, message: "No IP was provided!" });
  }
}
