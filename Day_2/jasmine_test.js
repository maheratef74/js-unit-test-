import { MathUtils } from './index.js';

describe('Task 2: MathUtils (Jasmine)', () => {
    let math;

    beforeEach(() => {
        math = new MathUtils();
    });

    it('should correctly sum two numbers', () => {
        expect(math.sum(2, 3)).toBe(5);
    });

    it('should correctly subtract two numbers', () => {
        expect(math.substract(10, 4)).toBe(6);
    });

    it('should correctly multiply two numbers', () => {
        expect(math.multiply(3, 4)).toBe(12);
    });

    it('should correctly divide two numbers', () => {
        expect(math.divide(10, 2)).toBe(5);
    });

    it('should correctly calculate average', () => {
        expect(math.average(10, 20)).toBe(15);
    });

    it('should correctly calculate factorial', () => {
        expect(math.factorial(5)).toBe(120);
        expect(math.factorial(0)).toBe(1);
    });

    it('should throw error for negative numbers in factorial', () => {
        expect(() => math.factorial(-1)).toThrowError("There is no factorial for negative numbers");
    });

    it('should check positivity correctly', () => {
        expect(math.checkPositivity(5)).toBe(true);
        expect(math.checkPositivity(-1)).toBe(false);
        expect(math.checkPositivity(0)).toBe(true);
    });
});
