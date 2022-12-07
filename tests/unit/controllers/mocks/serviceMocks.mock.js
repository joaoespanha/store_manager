const findAllOkResp = {
  type: null, message: [
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
    }]
}
const findByIdOkResp = {
  type: null, message: {
    id: 2,
    name: "Traje de encolhimento"
}
}

const findByIdErrorResp = { type: 'id_not_found', message: 'Product not found' }



module.exports = {
  findAllOkResp,
  findByIdOkResp,
  findByIdErrorResp
}