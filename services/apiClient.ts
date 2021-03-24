import axios, { AxiosInstance } from 'axios'

export const APIClientS: AxiosInstance = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/adamlwomble/nexus-cognitive-front-end',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 2000,
  withCredentials: false
})
