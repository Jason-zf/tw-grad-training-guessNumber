const guessNumber = require('../src/guess_number');

describe('Guess Number', () => {
    it('should return Wrong Input，Input again when input is [1 2]', function () {
        let input = [1, 2];
        expect(guessNumber(input)).toEqual("Wrong Input，Input again");
    });
});