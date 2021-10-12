import axios from "axios";

export async function getCnpjDetails(cnpj: string) {
  let response: any;

  await axios
    .get(`https://minhareceita.org/${cnpj}`)
    .then((responseRequest) => {
      response = responseRequest;
    })
    .catch(() => {
      response = null;
    });

  return response;
}
