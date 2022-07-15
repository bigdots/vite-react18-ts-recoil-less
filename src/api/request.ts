import axios, { AxiosRequestConfig } from 'axios'
const host = import.meta.env.VITE_APIHOST //环境变量——请求公共地址

export const GET = (data: AxiosRequestConfig<any>) => {
  axios({
    baseURL: host,
    method: 'get',
    ...data,
  })
}

export const POST = (data: AxiosRequestConfig<any>) => {
  axios({
    baseURL: host,
    method: 'post',
    ...data,
  })
}
