import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

const BASE_URL = process.env.REACT_APP_API_BASE_URL

async function signUp(body) {
  await axios.post(`${BASE_URL}/sign-up`, body)
}

const api = {
  signUp,
}

export default api