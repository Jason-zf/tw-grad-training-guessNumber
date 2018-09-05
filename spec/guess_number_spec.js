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

    it('should print 1 correct when input one correct number', function () {
        let input = ['1 5 6 7'];
        guessNumber(input, printMock);
        expect(printMock).toHaveBeenCalledWith("1 correct");
    });

    it('should print 2 and 4 wrong position when input contains two wrong position number', function () {
        let input = ['2 4 7 8'];
        guessNumber(input, printMock);
        expect(printMock).toHaveBeenCalledWith("2 and 4 wrong position");
    });

    it('should print 4 correct, 2 and 3 wrong position when input contains two wrong position number and one correct number', function () {
        let input = ['0 3 2 4'];
        guessNumber(input, printMock);
        expect(printMock).toHaveBeenCalledWith("4 correct, 2 and 3 wrong position");
    });

    it('should print all wrong when input contains all wrong number', function () {
        let input = ['5 6 7 8'];
        guessNumber(input, printMock);
        expect(printMock).toHaveBeenCalledWith("all wrong");
    });

    it('should print 4 numbers position wrong when input contains all wrong poition number', function () {
        let input = ['4 3 2 1'];
        guessNumber(input, printMock);
        expect(printMock).toHaveBeenCalledWith("4 numbers position wrong");
    });

    it('should print win, all correct when input contains all correct number', function () {
        let input = ['1 2 3 4'];
        guessNumber(input, printMock);
        expect(printMock).toHaveBeenCalledWith("win, all correct");
    });

    it('should print Congratulations，you win! when input contains all correct number', function () {
        let input = ['1 5 6 7', '2 4 7 8', '0 3 2 4', '5 6 7 8', '4 3 2 1', '1 2 3 4'];
        guessNumber(input, printMock);
        expect(printMock).toHaveBeenCalledWith("win, all correct");
    });

    it('should print Game over! when input contains no all correct number', function () {
        let input = ['1 5 6 7', '2 4 7 8', '0 3 2 4', '5 6 7 8', '4 3 2 1', '1 3 2 4'];
        guessNumber(input, printMock);
        expect(printMock).toHaveBeenCalledWith("Game over!");
    });


});