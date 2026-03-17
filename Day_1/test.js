import * as chai from "chai";
import {
  capitalizeText,
  createArray,
  obj1,
  obj2,
  CheckPositivity,
  MathUtils,
  Mult,
  obj3,
} from "./index.js";

const { expect, assert } = chai;
chai.should();

describe("capitalizeText", () => {
  it("string input returns string", () => {
    expect(capitalizeText("hamada")).to.be.a("string");
  });
  it("string input returns capitalized", () => {
    expect(capitalizeText("hamada")).to.equal("HAMADA");
  });
  it("number input throws TypeError", () => {
    expect(() => capitalizeText(12)).to.throw(TypeError, "parameter should be string");
  });
  it("accepts one param", () => {
    expect(capitalizeText).to.have.lengthOf(1);
  });
});

describe("createArray", () => {
  it("returns an array", () => {
    expect(createArray(3)).to.be.an("array");
  });
  it("returns array of length 3 including 1 after 5 seconds", function (done) {
    this.timeout(6000);
    setTimeout(() => {
      const result = createArray(3);
      assert.lengthOf(result, 3);
      result.should.include(1);
      done();
    }, 5000);
  });
  it.skip("pending test case", () => {
    expect(true).to.be.true;
  });
});

describe("Object Equality", () => {
  it("deep equality with expect, should, assert", () => {
    expect(obj1).to.deep.equal(obj2);
    obj1.should.deep.equal(obj2);
    assert.deepEqual(obj1, obj2);
  });
});

describe("CheckPositivity", () => {
  it("checks 4, -1, 0", () => {
    expect(CheckPositivity(4)).to.be.true;
    CheckPositivity(-1).should.be.false;
    assert.isFalse(CheckPositivity(0));
  });
});

describe("MathUtils", () => {
  it("has sum and sub functions", () => {
    assert.isFunction(MathUtils.prototype.sum);
    assert.isFunction(MathUtils.sub);
  });
  it("instance check", () => {
    const instance = new MathUtils();
    assert.instanceOf(instance, MathUtils);
  });
  it("validates parameters", () => {
    assert.throws(() => MathUtils.sub(5), Error);
    assert.throws(() => MathUtils.sub("5", 2), Error);
    assert.equal(MathUtils.sub(5, 2), 3);
  });
});

describe("Mult", () => {
  it("validates x > 0 and return > 0", () => {
    assert.throws(() => Mult(0), Error);
    assert.isAbove(Mult(5), 0);
  });
});

describe("Nested Object", () => {
  it("checks a.b[0] includes {x: 1}", () => {
    assert.deepEqual(obj3.a.b[0], { x: 1 });
  });
});