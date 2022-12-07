const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const productServices = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');


describe('CONTROLLER : testing POST /products route', () => {
  it('testing the response if the new product was regiostered successfully', async () => {

    const req = { body: { name: 'ProdutoX' } }
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productServices, 'insert').resolves({ type: null, message: { id: 4, name: 'ProdutoX' } })
    
    await productsController.insert(req, res)

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ id: 4, name: 'ProdutoX' })
  })
})