import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

const BASE_URL = process.env.REACT_APP_API_BASE_URL

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body)

  return promise
}

function signIn(body) {
  const promise = axios.post(`${BASE_URL}/login`, body)

  return promise
}

const api = {
  signUp,
  signIn
}

export default api