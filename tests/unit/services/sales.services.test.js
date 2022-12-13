const { expect } = require('chai');
const sinon = require('sinon');

const salesServices = require('../../../src/services/sales.service');
const salesModels = require('../../../src/models/sales.model');
const {allSalesObj} = require('./mocks/sales.service.mock')

describe('SERVICES: tests Get routes on sales services ', () => {
  it('tests if the get all function returns an object with type null and sales in message property', async () => {
    sinon.stub(salesModels, 'getAll').resolves(allSalesObj.message)
    const result = await salesServices.getAll();
    console.log(result);
    expect(result).to.be.a('object')
    expect(result.type).to.be.null
    expect(result.message).to.be.deep.equal(allSalesObj.message)
  });

  it('tests if the findById function returns an object with type null and the sales info with valid id', async () => {
    sinon.stub(salesModels, 'findById').resolves(allSalesObj.message)
    
    const result = await salesServices.findById(allSalesObj.message[0].saleId);
    
    expect(result).to.be.a('object')
    expect(result.type).to.be.null
    expect(result.message).to.be.deep.equal(allSalesObj.message)
  });

  afterEach(sinon.restore)
});

