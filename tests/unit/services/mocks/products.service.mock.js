const findByIdReq = {
  id: 2,
}

const findByIdRes = {
  type: null, message: { id: 2, name: 'Traje de encolhimento' } 

}

const findAllRes = {
  type: null, message: [{
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
  }]
};

const invalidIdResponse = {
  type: 'id_not_found',
  message: 'Product not found'
};

const invalidIdReq = {
  id: 456,
}

const insertOkResp = {
  type: null,
  message: {
    id: 4,
    name: "ProdutoX"
  }
}
const dbOkInsertResp = { insertId:4 }

const insertOkReq = {
  name: "ProdutoX"
}

module.exports = {
  findByIdReq,
  findByIdRes,
  findAllRes,
  invalidIdReq,
  invalidIdResponse,
  insertOkReq,
  insertOkResp,
  dbOkInsertResp
  
}