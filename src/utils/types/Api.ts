export enum ApiMethod {
  POST = 'post',
  PUT = 'put',
  GET = 'get',
  DELETE = 'delete',
}

export interface APIHeaders {
  'Content-Type': string,
  Authorization: string
}

export interface APIConfig {
  method: ApiMethod,
  url: string,
  headers: APIHeaders

}
