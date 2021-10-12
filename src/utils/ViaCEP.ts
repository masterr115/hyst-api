import axios from "axios";

export async function getCEPInformation(cep: string) {
  try {
    const response = await axios.get(
      "https://viacep.com.br/ws/" + cep + "/json/"
    );

    if (response.status === 400) {
      return null;
    } else {
      return response.data;
    }
  } catch (e) {
    return null;
  }
}
