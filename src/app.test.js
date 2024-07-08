const { sum } = require("./app")

describe('app test suite', () => {
    it('add 7 + 5 shoulbe be equal to 12', () => {
        expect(sum(5, 7)).toBe(13);
    })
})