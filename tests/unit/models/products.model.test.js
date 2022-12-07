const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/database');
const productsModels = require('../../../src/models/products.model');
const { findAllResponse,
  findByIdRes,
  findByIdReq,
  insertOkReq,
  insertOkResp } = require('./mocks/products.model.mock')

describe('Unit testing of products models', () => {
  it('testing /products Get route', async () => {
    sinon.stub(connection, 'execute').resolves([findAllResponse]);

    const result = await productsModels.findAll();


    expect(result).to.be.a('array')
    expect(result[0]).to.be.deep.equal(findAllResponse[0])
  })

  it('testing /:id Get route', async () => {
    sinon.stub(connection, 'execute').resolves([[findByIdRes]]);

    const result = await productsModels.findById(findByIdReq.id);


    expect(result).to.be.a('object')
    expect(result).to.be.deep.equal(findByIdRes)
  })
  
  afterEach(sinon.restore);

});

describe('MODEL: testing /products POST route', () => {
  it('tests if it is possible to register a new product', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId:4 }])

    const result = await productsModels.insert('ProdutoX')
    console.log('OLAAAAAAAAAAAA',result);
     expect(result).to.be.a('number')
    //expect(result).to.be.equal(4)
  })
  afterEach(sinon.restore);
})
