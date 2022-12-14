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

describe('SERVICES: tests DELETE routes on sales services ', () => {
  it('tests if the get all function returns an object with type null when deleting is successeful', async () => {
    sinon.stub(salesModels, 'findById').resolves(true)

    const result = await salesServices.deleteSale(1);

    expect(result).to.be.a('object')
    expect(result.type).to.be.null
  });

  it('tests if the an error message is returned whn searching for a non existant sale', async () => {
    sinon.stub(salesModels, 'findById').resolves([])

    const result = await salesServices.deleteSale(88);

    expect(result).to.be.a('object')
    expect(result.type).to.be.equal('not_found')
    expect(result.message).to.be.deep.equal('Sale not found')
  });

  afterEach(sinon.restore)
});
