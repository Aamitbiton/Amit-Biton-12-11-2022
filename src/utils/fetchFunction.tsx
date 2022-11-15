import axios from "axios";
interface fetchData {
  url: string;
  params?: object;
}

export async function fetch_url({ url, params }: fetchData) {
  let options = {
    method: "GET",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    url,
    params: { apikey: "e3MSZUGL598CrYKMK9oclATC0qv0SgzE" },
  };
  if (params) options.params = { ...params, ...options.params };
  try {
    return await axios(options);
  } catch (error) {
    console.error(error);
  }
}
