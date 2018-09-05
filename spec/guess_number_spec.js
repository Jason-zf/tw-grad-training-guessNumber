const guessNumber = require('../src/guess_number');

describe('Guess Number', () => {
    beforeEach(() => {
        printMock = jasmine.createSpy();
    });
    it('should print Wrong Input，Input again when input is [1 2]', function () {
        let input = ['1 2'];
        guessNumber(input, printMock);
        expect(printMock).toHaveBeenCalledWith("Wrong Input，Input again");
    });

    it('should print Wrong Input，Input again when input contains repeat number', function () {
        let input = ['1 1 2 3'];
        guessNumber(input, printMock);
        expect(printMock).toHaveBeenCalledWith("Wrong Input，Input again");
    });

    it('should print Wrong Input，Input again when input contains repeat number', function () {
        let input = ['1 5 6 7'];
        guessNumber(input, printMock);
        expect(printMock).toHaveBeenCalledWith("1 correct");
    });


});