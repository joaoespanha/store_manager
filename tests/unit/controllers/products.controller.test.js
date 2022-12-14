const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const productServices = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const serviceMocks = require('./mocks/productService.mock')

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

describe('CONTROLLER : testing DELETE /products routes', () => {
  it('tests if the status code of a successeful delete', async () => {
    const req = { params: { id: 1 } }
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productServices, 'deleteProduct').resolves({ type: null })

    await productsController.deleteProduct(req, res)

    expect(res.status).to.have.been.calledWith(204);
  });

  it('tests if it isnt possibel to delete a non existant product', async () => {
    const req = { params: { id: 456 } }
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productServices, 'deleteProduct').resolves({ type: 'not_found' })

    await productsController.deleteProduct(req, res)

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });

  })
  
  afterEach(sinon.restore)
})

describe('CONTROLLER : testing PUT /products routes', () => {
  afterEach(sinon.restore)
  it('tests if it isnt possible to update a product without an id', async () => {
    sinon.stub(productServices, 'update').resolves({ type: 'not_found', message:  'Product not found' })

    const req = { params:{ id:789 }, body:{name:'batman'} }
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.update(req, res)

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' })


  })

})
