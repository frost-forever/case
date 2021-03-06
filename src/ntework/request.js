import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //axios拦截器
  //1、请求拦截 reques
  instance.interceptors.request.use(config => {
    return config
  },err => {
    console.log(err);
  })
  //2、响应拦截 response
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })

  return instance(config)
}