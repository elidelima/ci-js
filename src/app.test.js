const { sum, sub } = require("./app")

describe('app test suite', () => {
    it('add 7 + 5 shoulbe be equal to 12', () => {
        expect(sum(5, 7)).toBe(12);
    })

    it('sub 7 - 5 shoulbe be equal to 2', () => {
        expect(sub(7, 5)).toBe(2);
    })
})