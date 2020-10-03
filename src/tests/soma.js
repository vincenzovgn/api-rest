const somar = require('./../soma');
const chai = require('chai');
const expect = chai.expect
const should = chai.should()

describe('To testo função de somar', () => {
  it('Somar 2 + 5 = 7', () => {
    expect( somar(2, 5) ).to.equal(7)
  });
})
