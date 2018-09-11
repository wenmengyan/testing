const { should, expect, assert } = require('chai');/* 断言 */
const { add, mul } = require('../src/math');


describe('#math', () => {
  describe('add', () => {
    it('should return 5 when 2+3', () => {
      expect(add(2, 3), 5);
    });

    it/* .only 只执行 .skip跳过 */('should return 5 when 2+3', () => {
      expect(add(2, -3), -1);
    });
  });

  describe('mul', () => {
    it('should return 6 when 2*3', () => {
      expect(add(2, 3), 6);
    });
  });

});