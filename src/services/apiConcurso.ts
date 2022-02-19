import axios from 'axios'

const apiConcurso = axios.create({
  baseURL: 'https://loteriascaixa-api.herokuapp.com/api/'
})

export default apiConcurso