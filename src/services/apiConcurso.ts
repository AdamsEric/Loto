import axios, { AxiosResponse } from 'axios'
import { ILotomaniaConcurso } from './types'

const BASEURL = 'https://servicebus2.caixa.gov.br/portaldeloterias/api'

const lotomaniaAPI =  axios.create({
  baseURL: `${BASEURL}/lotomania/`
})

const consultarConcursoLotomania = async (concursoId: number): Promise<ILotomaniaConcurso> => {
  const response: AxiosResponse<ILotomaniaConcurso> = await lotomaniaAPI.get(`${concursoId}`)

  return response.data
}

export {
  consultarConcursoLotomania
}