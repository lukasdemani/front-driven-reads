import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

// const BASE_URL = process.env.REACT_APP_API_BASE_URL
const BASE_URL = 'http://localhost:5000';

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

function getBag(token) {
  const headers = createConfig(token)
function getBooks(body) {

  //const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/books`, body);

  return promise;
}

function sendToBag(body){
  const promise = axios.post(`${BASE_URL}/bag`, body)

  return promise
}

function getBag(body){
  // const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/bag`, body)

  return promise
}

const api = {
  signUp,
  signIn,
  getBook,
  addToCart,
  getBooks,
  sendToBag,
  getBag
}

export default api