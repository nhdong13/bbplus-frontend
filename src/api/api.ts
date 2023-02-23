import { APIHeaders, ApiMethod } from "@/utils/types/API";
import axios from "axios";
import camelCaseKeys from 'camelcase-keys'
const api = axios.create({
  baseURL: "http://localhost:3100" //temp
})

const ApiCall = async (
  method: ApiMethod,
  path: string,
  data?: object,
) => {
  try {
    const headers: APIHeaders = {
      'Content-Type': 'application/json',
      Authorization: '',
    };

    const config: any = {
      method: method,
      url: path,
      headers: headers,
    };

    const result = await axios(config);
    const transformData = camelCaseKeys(result.data);
    return transformData;

  } catch (error: any) {
    console.log("error: ", error)
  }
};


const Api = {
  get: (path: string, params?: object) => {
    return ApiCall(ApiMethod.GET, path, params);
  },
  put: (path: string, data: object) => {
    return ApiCall(ApiMethod.PUT, path, data);
  },
  post: (path: string, data?: object) => {
    return ApiCall(ApiMethod.POST, path, data);
  },
  delete: (path: string, data?: object) => {
    return ApiCall(ApiMethod.DELETE, path, data);
  },
};

export default Api
