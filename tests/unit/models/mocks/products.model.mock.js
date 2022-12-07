const findByIdReq = {
  id:2
}

const findByIdRes = {
  id: 2,
  name: "Traje de encolhimento"
}



const findAllResponse = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  },
  {
    id: 3,
    name: "Escudo do Capitão América"
  }
]

const insertOkResp = {
  id: 4,
  name: "ProdutoX"
}

const insertOkReq = {
  name: "ProdutoX"
}


module.exports = {
  findByIdReq,
  findByIdRes,
  findAllResponse,
  insertOkReq,
  insertOkResp
}