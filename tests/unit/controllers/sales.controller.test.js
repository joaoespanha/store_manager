const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const salesServices = require('../../../src/services/sales.service')
const salesContollers = require('../../../src/controllers/sales.controller')

const mocks = require('./mocks/salesService.mocks')

chai.use(sinonChai);

describe('CONTROLLER : tests GET /sales routes', () => {
  it('tests if THE OK RESPONSE is given by getAll func', async () => {
    sinon.stub(salesServices, 'getAll').resolves(mocks.getAllOKResp)

    const req = {}
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesContollers.getAll(req, res)

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mocks.getAllOKResp.message);
    
  });
  it('tests if th message error is returned when searching an inexistent saleID', async () => {
    sinon.stub(salesServices, 'findById').resolves(mocks.idNotFoundResp)

    const req = { params:{ id:45 } }
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
    await salesContollers.findById(req, res);

    expect(res.status).to.have.been.calledWith(404)
    expect(res.json).to.have.been.calledWith({ message: mocks.idNotFoundResp.message })

  })
})