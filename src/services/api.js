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

function getBook(params, token) {
  const headers = createConfig(token)

  const promise = axios.get(`${BASE_URL}/books/${params}`, headers)

  return promise
}

function addToCart(book, token) {
  const headers = createConfig(token)

  const promise = axios.post(`${BASE_URL}/bag`, book, headers)

  return promise
}

function getBag(token) {
  const headers = createConfig(token)

  const promise = axios.get(`${BASE_URL}/bag`, headers);

  return promise;
}

function deleteBag() {
  const promise = axios.delete(`${BASE_URL}/bag`)

  return promise
}

function getBooks(token) {
  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/books`, config);

  return promise;
}

function addOrder(body, token) {
  const config = createConfig(token);

  const promise = axios.put(`${BASE_URL}/add-order`, body, config)

  return promise
}

const api = {
  signUp,
  signIn,
  getBook,
  addToCart,
  getBooks,
  getBag,
  addOrder,
  deleteBag
}

export default api