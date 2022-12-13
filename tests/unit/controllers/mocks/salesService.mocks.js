const fullSalesOKArry = [
  {
    saleId: 1,
    date: "2021-09-09T04:54:29.000Z",
    productId: 1,
    quantity: 2
  },
  {
    saleId: 1,
    date: "2021-09-09T04:54:54.000Z",
    productId: 2,
    quantity: 2
  }
];
const getAllOKResp = {type: null, message: fullSalesOKArry}
const idNotFoundResp = { type: 'not_found', message: 'Sale not found'}

module.exports = { getAllOKResp, idNotFoundResp }