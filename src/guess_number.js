const answer = [1, 2, 3, 4];
let win = false;

const getResult = (inputElement, answerIn) => {
    let numOfA = 0, numOfB = 0;
    let res = {'Output': '', 'Instruction': ''};
    let wrongPosition = [];
    let correct = [];
    for (let i = 0; i < answerIn.length; i++) {
        if (answerIn[i] === inputElement[i]) {
            numOfA++;
            correct.push(answerIn[i]);
        }
        if (inputElement.includes(answerIn[i]) && i !== inputElement.indexOf(answerIn[i])) {
            numOfB++;
            wrongPosition.push(answerIn[i]);
        }
    }
    res.Output = numOfA + "A" + numOfB + "B";
    if (numOfA === 4) {
        res.Instruction = "win, all correct";
        win = true;
        return res;
    }
    if (numOfB === 4) {
        res.Instruction = "4 numbers position wrong";
        return res;
    }
    if (numOfA === 0 && numOfB === 0) {
        res.Instruction = "all wrong";
        return res;
    }
    correct = numOfA === 0 ? "" : correct.join(" and ") + " correct";
    wrongPosition = numOfB === 0 ? "" : wrongPosition.join(" and ") + " wrong position";
    res.Instruction = (correct.length !== 0 && wrongPosition.length !== 0) ? correct + ", " + wrongPosition : correct + wrongPosition;
    return res;
}

const guessNumber = (input, print) => {
    for (let i = 0; i < Math.min(6, input.length); i++) {
        if (!inputValidation(input[i])) {
            print("Wrong Input，Input again");
        }
        let string = getResult(input[i].split(' ').map(value => parseInt(value)), answer);
        print(string.Instruction);
    }
    if(win){
        print("Congratulations，you win!");
    }else {
        print("Game over!");
    }

}

const inputValidation = (input) => {
    if (input.split(' ').length != 4 || new Set(input.split(' ').map(value => parseInt(value))).size < 4) {
        return false;
    }
    return true;
}
module.exports = guessNumber;
