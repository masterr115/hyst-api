import axios from "axios";

export async function searchCourier(code: string) {
  let response: any;

  await axios
    .get(
      "https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=" +
        code
    )
    .then((responseRequest) => {
      response = responseRequest;
    })
    .catch(() => {
      response = null;
    });

  return response;
}
