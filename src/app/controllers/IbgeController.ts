import { Request, Response } from "express";

import {
  getStateByInitials,
  getCityByStateCode,
  getAllStates,
  getCityByNameAndState,
} from "@utils/IBGE";

export async function getAllBrazilStates(req: Request, res: Response) {
  const responseStates = await getAllStates();

  if (responseStates) {
    return res.status(200).send({ status: 200, data: responseStates.data });
  } else {
    return res
      .status(502)
      .send({ status: 502, message: "The government database is down." });
  }
}

export async function getCitiesByState(req: Request, res: Response) {
  const { state, complete } = req.query;

  if (state) {
    const responseState = await getStateByInitials(state as string);

    if (responseState !== null) {
      const arrayCities = [];
      const responseCity = await getCityByStateCode(responseState.id);

      if (!complete) {
        for (const city of responseCity.data) {
          arrayCities.push({ id: city.id, nome: city.nome, UF: state });
        }

        return res.status(200).send({ status: 200, data: arrayCities });
      } else if (complete) {
        return res
          .status(200)
          .send({ status: 200, response: responseCity.data });
      } else {
        for (const city of responseCity.data) {
          arrayCities.push({ id: city.id, nome: city.nome, UF: state });
        }

        return res.status(200).send({ status: 200, data: arrayCities });
      }
    } else {
      return res.status(404).json({
        status: 404,
        message: "The informed state was not found in the government database.",
      });
    }
  } else {
    return res
      .status(400)
      .json({ status: 400, message: "No query was provided!" });
  }
}

export async function getStateInfo(req: Request, res: Response) {
  const { state } = req.query;

  if (state) {
    const statesResponse = await getStateByInitials(state as string);

    if (statesResponse) {
      return res.status(200).send({ status: 200, data: statesResponse });
    } else {
      return res.status(404).json({
        status: 404,
        message: "The informed state was not found in the government database.",
      });
    }
  } else {
    res.status(400).send({ status: 400, message: "No state was provided." });
  }
}

export async function getCityInfo(req: Request, res: Response) {
  const { city, state } = req.query;

  if (city && state) {
    const responseCity = await getCityByNameAndState(
      city as string,
      state as string
    );

    if (responseCity) {
      return res.status(200).send({ status: 200, data: responseCity });
    } else {
      return res.status(404).json({
        status: 404,
        message: "City not found in the government database.",
      });
    }
  } else {
    res.status(400).json("No query was provided!");
  }
}
