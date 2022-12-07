const { expect } = require('chai');
const sinon = require('sinon');

const productServices = require('../../../src/services/products.service');
const productsModels = require('../../../src/models/products.model');

const { findByIdReq,
  findByIdRes,
  findAllRes,
  invalidIdReq,
  invalidIdResponse, insertOkReq, insertOkResp, dbOkInsertResp } = require('./mocks/products.service.mock')


describe('SERVICE:testing services Get routes', () => {
  it('testing  if all the products are returned by findAll function', async () => {
    sinon.stub(productsModels, 'findAll').resolves(findAllRes);

    const result = await productServices.findAll();
    // console.log(result);

    expect(result.type).to.be.equal(findAllRes.type);
    // expect(result.message).to.be.deep.equal(findAllRes.message)
  });

  it('testing  if the right product is returned by findById function', async () => {
    sinon.stub(productsModels, 'findById').resolves(findByIdRes);

    const result = await productServices.findById(findByIdReq.id);
    // console.log(result);

    expect(result.type).to.be.deep.equal(findAllRes.type);
  });

  it('testing  if the error message is returned when trying to find a non existant id', async () => {
    sinon.stub(productsModels, 'findById').resolves(null);

    const result = await productServices.findById(invalidIdReq.id);
     //console.log('ola',result);

    expect(result.type).to.be.deep.equal(invalidIdResponse.type);
    expect(result.message).to.be.deep.equal(invalidIdResponse.message)
  })

  afterEach(sinon.restore)
})

describe('SERVICE: Tests /products POST routes', () => {
  it('tests if the resgistered product is returned by insert func', async () => {
    sinon.stub(productsModels, 'insert').resolves(4)

    const result = await productServices.insert(insertOkReq.name);
    // console.log(result);
    expect(result).to.be.a('object')
    expect(result.type).to.be.equal(null)
    expect(result.message).to.be.deep.equal(insertOkResp.message)

  })
})