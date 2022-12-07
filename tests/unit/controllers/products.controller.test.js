const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const productServices = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const serviceMocks = require('./mocks/serviceMocks.mock')

describe('CONTROLLER : testing GET /products routes', () => {
  afterEach(sinon.restore)
  it('tests if all products are returned in the findAll func', async () => {
    sinon.stub(productServices, 'findAll').resolves(serviceMocks.findAllOkResp)
    
    const req = {}
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
    await productsController.findAll(req, res)

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(serviceMocks.findAllOkResp.message)


  })
  it('tests if the right product is returned in the findById func', async () => {
    sinon.stub(productServices, 'findById').resolves(serviceMocks.findByIdOkResp)

    const req = {params: { id:2 }}
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.findById(req, res)

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(serviceMocks.findByIdOkResp.message)


  })

  it('tests if the right product is returned in the findById func', async () => {
    sinon.stub(productServices, 'findById').resolves(serviceMocks.findByIdErrorResp)

    const req = { params: { id: 847 } }
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.findById(req, res)

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' })


  })
})

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