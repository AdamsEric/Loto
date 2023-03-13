import { TipoJogoEnum } from './TipoJogoEnum'

export interface ILotomaniaGanhadores {
  ganhadores: number,
  municipio: string,
  nomeFatansiaUL: string,
  posicao: number,
  serie: string,
  uf: string
}

export interface ILotomaniaRateioPremio {
  descricaoFaixa: string,
  faixa: number,
  numeroDeGanhadores: number,
  valorPremio: number
}

export interface ILotomaniaConcurso {
  acumulado: boolean,
  dataApuracao: string,
  dataProximoConcurso: string,
  dezenasSorteadasOrdemSorteio: string[],
  exibirDetalhamentoPorCidade: boolean,
  id: any,
  indicadorConcursoEspecial: number,
  listaDezenas: string[],
  listaDezenasSegundoSorteio: any,
  listaMunicipioUFGanhadores: ILotomaniaGanhadores[]
  listaRateioPremio: ILotomaniaRateioPremio[]
  listaResultadoEquipeEsportiva: any
  localSorteio: string,
  nomeMunicipioUFSorteio: string,
  nomeTimeCoracaoMesSorte: string,
  numero: number,
  numeroConcursoAnterior: number,
  numeroConcursoFinal_0_5: number,
  numeroConcursoProximo: number,
  numeroJogo: number,
  observacao: string,
  premiacaoContingencia: any,
  tipoJogo: TipoJogoEnum,
  tipoPublicacao: number,
  ultimoConcurso: boolean,
  valorAcumuladoConcursoEspecial: number,
  valorAcumuladoConcurso_0_5: number,
  valorAcumuladoProximoConcurso: number,
  valorArrecadado: number,
  valorEstimadoProximoConcurso: number,
  valorSaldoReservaGarantidora: number,
  valorTotalPremioFaixaUm: number
}