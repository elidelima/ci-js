const { sum } = require("./app")

describe('app test', () => {
    it('add 7 + 5 shoulbe be equal to 12', () => {
        expect(sum(5, 7)).toBe(12);
    })
})