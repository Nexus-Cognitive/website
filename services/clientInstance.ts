import axios, { AxiosInstance } from 'axios'

export const ClientInstanceS: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 2000,
  withCredentials: false
})
