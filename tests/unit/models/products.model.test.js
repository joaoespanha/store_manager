const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/database');
const productsModels = require('../../../src/models/products.model');
const { findAllResponse, findByIdRes, findByIdReq } = require('./mocks/products.model.mock')

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

})
