const { expect } = require("chai");
const calculator = require("../calculator.js");

describe("Calculator Test Suite", () => {

  // ADD
  describe("add()", () => {
    it("PASS: 5 + 2 = 7", () => {
      expect(calculator.add(5, 2)).to.equal(7);
    });

    it("FAIL: 5 + 2 = 8", () => {
      expect(calculator.add(5, 2)).to.equal(8);
    });
  });

  // SUB
  describe("sub()", () => {
    it("PASS: 5 - 2 = 3", () => {
      expect(calculator.sub(5, 2)).to.equal(3);
    });

    it("FAIL: 5 - 2 = 10", () => {
      expect(calculator.sub(5, 2)).to.equal(10);
    });
  });

  // MUL
  describe("mul()", () => {
    it("PASS: 5 * 2 = 10", () => {
      expect(calculator.mul(5, 2)).to.equal(10);
    });

    it("FAIL: 5 * 2 = 9", () => {
      expect(calculator.mul(5, 2)).to.equal(9);
    });
  });

  // DIV
  describe("div()", () => {
    it("PASS: 10 / 2 = 5", () => {
      expect(calculator.div(10, 2)).to.equal(5);
    });

    it("FAIL: 10 / 2 = 3", () => {
      expect(calculator.div(10, 2)).to.equal(3);
    });
  });

});
