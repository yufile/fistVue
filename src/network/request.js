import axios from "axios";
export function query(config) {
  const serve = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  serve.interceptors.request.use(config =>{
    return config
  },error => {
    console.log(error);
  })
  serve.interceptors.response.use(res =>{
    return res.data
  },error => {
    console.log(error);
  })
  return serve(config)
}
export function queryT(config) {
  const serve2 = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  serve2.interceptors.request.use(config =>{
    return config
  },error => {
    console.log(error);
  })
  serve2.interceptors.response.use(res =>{
    return res.data
  },error => {
    console.log(error);
  })
  return serve2(config)
}
