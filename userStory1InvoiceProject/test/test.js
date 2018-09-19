const assert = require('chai').assert;
const temp = require('../temp');
 
describe('App', function () {
  
  // For getNumberFromASCII function
  it('Return 1 for 000000011 ASCII digits', function () {
    assert.equal(temp.getNumberFromASCII('000000011'), '1');
  });

  it('Return 2 for 001222010 ASCII digits', function () {
    assert.equal(temp.getNumberFromASCII('001222010'), '2');
  });

  it('Return 3 for 000222011 ASCII digits', function () {
    assert.equal(temp.getNumberFromASCII('000222011'), '3');
  });

  it('Return 4 for 010020011 ASCII digits', function () {
    assert.equal(temp.getNumberFromASCII('010020011'), '4');
  });

  it('Return 5 for 010222001 ASCII digits', function () {
    assert.equal(temp.getNumberFromASCII('010222001'), '5');
  });

  it('Return 6 for 011222001 ASCII digits', function () {
    assert.equal(temp.getNumberFromASCII('011222001'), '6');
  });

  it('Return 7 for 000200011 ASCII digits', function () {
    assert.equal(temp.getNumberFromASCII('000200011'), '7');
  });

  it('Return 8 for 011222011 ASCII digits', function () {
    assert.equal(temp.getNumberFromASCII('011222011'), '8');
  });

  it('Return 9 for 010222011 ASCII digits', function () {
    assert.equal(temp.getNumberFromASCII('010222011'), '9');
  });

  it('Return 0 for 011202011 ASCII digits', function () {
    assert.equal(temp.getNumberFromASCII('011202011'), '0');
  });

//For  mapCharactersToNumbers function

  it('Return 0 for space', function () {
    assert.equal(temp.mapCharactersToNumbers(' '), '0');
  });

  it('Return 1 for Pipe', function () {
    assert.equal(temp.mapCharactersToNumbers('|'), '1');
  });

  it('Return 2 for Underscore', function () {
    assert.equal(temp.mapCharactersToNumbers('_'), '2');
  });

})