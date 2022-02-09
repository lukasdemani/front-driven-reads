import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);

  return promise;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}

function addBook(body) {
  const promise = axios.post(`${BASE_URL}/books`, body);

  return promise;
}

function getBooks(token) {

  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/books`, config);

  return promise;
}

const api = {
  login,
  signUp,
  addBook,
  getBooks
}

export default api;