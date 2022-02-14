import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

const BASE_URL = process.env.REACT_APP_API_BASE_URL

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body)

  return promise
}

function signIn(body) {
  const promise = axios.post(`${BASE_URL}/login`, body)

  return promise
}

function getBook(params) {
  const promise = axios.get(`${BASE_URL}/books/${params}`)

  return promise
}

function addToCart(book, token) {
  const headers = createConfig(token)

  const promise = axios.post(`${BASE_URL}/bag`, book, headers)

  return promise
}

const api = {
  signUp,
  signIn,
  getBook,
  addToCart
}

export default api