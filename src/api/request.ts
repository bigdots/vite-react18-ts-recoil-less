import axios, { AxiosRequestConfig } from 'axios'

export const GET = (data: AxiosRequestConfig<any>) => {
  axios({
    baseURL: 'https://api.apiopen.top',
    method: 'get',
    ...data,
  })
}

export const POST = (data: AxiosRequestConfig<any>) => {
  axios({
    baseURL: 'https://api.apiopen.top',
    method: 'post',
    ...data,
  })
}
