import axios from "axios";

export async function getIPInfo(IPAddress: string) {
  const response = await axios.get(
    "http://ip-api.com/json/" +
      IPAddress +
      "?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query"
  );

  if (response.data.status === "fail") {
    return null;
  } else {
    return response.data;
  }
}
