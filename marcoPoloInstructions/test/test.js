const assert = require('chai').assert;
const marcoPoloInstructions = require('../macroPoloInstructions');
 
describe('App', function () {
  it('For number 1 to 30, App should return : 1,2,3,marco,5,6,polo,marco,9,10,11,marco,13,polo,15,marco,17,18,19,marco,polo,22,23,marco,25,26,27,marcopolo,29,30', function () {
    assert.equal(marcoPoloInstructions(30), '1,2,3,marco,5,6,polo,marco,9,10,11,marco,13,polo,15,marco,17,18,19,marco,polo,22,23,marco,25,26,27,marcopolo,29,30');
  })
})