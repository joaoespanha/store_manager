const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/database');

const salesModels = require('../../../src/models/sales.model');

const {fullSalesArray} = require('./mocks/sales.model.mock')


describe('MODEL: testing /sales POST route', () => {
  it('tests if it is possible to register a new sale', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }])

    const result = await salesModels.registerSale()

    console.log(result);

    expect(result).to.be.a('number')
    expect(result).to.be.equal(4)
  })

  /* it('tests if the sale is registered with the right products in sales_products table', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }])
    sinon.stub(salesModels, 'registerSale').resolves([{ insertId: 4 }])

    const saleId = await salesModels.registerSale()
    const result = await salesMocks.insertOkReq
      .map(async (product) => { salesModels.insertSaleInfo(saleId, product.productId, product.quantity) })

    
    Promise.all(result);

    expect(result).to.be.a('object')
    expect(result).to.be.equal(4)
  }) */
  afterEach(sinon.restore);
});

describe('MODEL: tests sales model GET routes', () => {
  it('tests if the func getAll returns the sales array', async () => {
    sinon.stub(connection, 'execute').resolves([fullSalesArray])

    const result = await salesModels.getAll()

    expect(result).to.be.a('array')
    expect(result[0]).to.be.deep.equal(fullSalesArray[0])

  });
  it('tests if th findById FUNC RETURNS THE SALES BY ID', async () => {
    sinon.stub(connection, 'execute').resolves([fullSalesArray]);

    const result = await salesModels.findById(fullSalesArray[0].saleId);

    expect(result).to.be.a('array')
    expect(result[0]).to.be.deep.equal(fullSalesArray[0])
    
  });

    afterEach(sinon.restore);

})