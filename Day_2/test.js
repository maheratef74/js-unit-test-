import { expect } from 'chai';
import { MathUtils, fetchPosts, makeTwoRequests, obj, sayHelloWorld, doSomeThingLater } from './index.js';

describe('Day 2 Tasks', function () {
    this.timeout(10000);


    describe('Task 1: Fetch Posts', () => {
        it('should return an array of posts', async () => {
            const data = await fetchPosts();
            expect(data).to.be.an('array');
            expect(data.length).to.be.at.least(1);
        });

        it('should have post objects with required properties', async () => {
            const data = await fetchPosts();
            expect(data[0]).to.have.property('id');
        });
    });

    describe('Task 2: MathUtils', () => {
        let math;
        beforeEach(() => {
            math = new MathUtils();
        });

        it('should correctly sum two numbers', () => {
            expect(math.sum(2, 3)).to.equal(5);
        });

        it('should correctly subtract two numbers', () => {
            expect(math.substract(10, 4)).to.equal(6);
        });

        it('should correctly multiply two numbers', () => {
            expect(math.multiply(3, 4)).to.equal(12);
        });

        it('should correctly divide two numbers', () => {
            expect(math.divide(10, 2)).to.equal(5);
        });

        it('should correctly calculate average', () => {
            expect(math.average(10, 20)).to.equal(15);
        });

        it('should correctly calculate factorial', () => {
            expect(math.factorial(5)).to.equal(120);
            expect(math.factorial(0)).to.equal(1);
        });

        it('should throw error for negative factorial', () => {
            expect(() => math.factorial(-1)).to.throw("There is no factorial for negative numbers");
        });

        it('should check positivity correctly', () => {
            expect(math.checkPositivity(5)).to.be.true;
            expect(math.checkPositivity(-1)).to.be.false;
            expect(math.checkPositivity(0)).to.be.true;
        });
    });

    describe('Additional Exports', () => {
        it('obj should be an object with id', () => {
            expect(obj).to.be.an('object');
            expect(obj).to.have.property('id');
        });

        it('sayHelloWorld should return correct string', () => {
            expect(sayHelloWorld()).to.equal("Hello World");
        });

        it('doSomeThingLater should resolve with Success', async () => {
            const result = await doSomeThingLater();
            expect(result).to.equal("Success");
        });
    });

    describe('Task 3: Async/Await Two Requests', () => {
        it('should return results from two requests using async/await', async () => {
            const results = await makeTwoRequests();
            expect(results).to.be.an('array').with.lengthOf(2);
            expect(results[0].id).to.equal(1);
            expect(results[1].id).to.equal(2);
        });
    });
});
