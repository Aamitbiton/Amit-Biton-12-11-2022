import axios from "axios";
import asyncMiddleware from "./utils";
interface fetchData {
  url: string;
  params?: object;
}

export async function fetch_url({ url, params }: fetchData) {
  let options = {
    method: "GET",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    url,
    params: { apikey: '8MFD4RGl1bU5j02WLvSXTPrtOtF36rPP' },
  };
  if (params) options.params = { ...params, ...options.params };
    return asyncMiddleware( async ()=> await axios(options))


}
