import axios from "axios";

export async function getStateByInitials(initial: string) {
  const response = await axios.get(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  );

  const findState = response.data.find(
    (x: { sigla: string }) => x.sigla === initial
  );

  if (findState) {
    return findState;
  } else {
    return null;
  }
}

export async function getCityByStateCode(stateCode: string) {
  const response = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateCode}/municipios`
  );

  return response;
}

export async function getAllStates() {
  const response = await axios.get(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  );

  if (response) {
    return response;
  } else {
    return null;
  }
}

export async function getCityByNameAndState(city: string, state: string) {
  const responseState = await this.getStateByInitials(state);

  if (responseState) {
    const responseGetCities = await this.getCityByStateCode(responseState.id);

    const findCity = responseGetCities.data.find(
      (x: { nome: string }) => x.nome === city
    );

    if (findCity) {
      return findCity;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
