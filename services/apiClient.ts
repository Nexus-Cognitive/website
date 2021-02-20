import axios, { AxiosInstance } from 'axios'

export const APIClientS: AxiosInstance = axios.create({
  baseURL:
    'https://deliver.kontent.ai/5e29be14-6937-0013-a499-bb6a4d5070f1/items',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 2000,
  withCredentials: false
})
