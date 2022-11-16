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
    params: { apikey: "vC5zC7AyCPgT9rNvlFW2hVQxUCXyHR70" },
  };
  if (params) options.params = { ...params, ...options.params };
    return asyncMiddleware( async ()=> await axios(options))


}
