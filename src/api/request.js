import axios from "axios";

export default async (url,methods,data) => {
  let requestUrl = url;
  let requestMethods = methods;
  let requestHeaders = {
    "Content-type":"application/json",
    "Accept":"application/json",
  }
  let requestData = data

  let res = await axios({
    method:requestMethods,
    url:requestUrl,
    headers:requestHeaders,
    data:requestData
  })

  return res
}
