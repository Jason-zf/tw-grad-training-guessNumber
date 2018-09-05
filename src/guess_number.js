const answer = [1, 2, 3, 4];

const getResult = (inputElement, answer) => {
    let numOfA = 0, numOfB = 0;
    let res = {'Output': '', 'Instruction': ''};
    let wrongPosition = [];
    let correct = [];
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === inputElement[i]) {
            numOfA++;
            correct.push(answer[i]);
        }
        if (i !== inputElement.indexOf(answer[i])) {
            numOfB++;
            wrongPosition.push[answer[i]];
        }
    }
    res.Output = numOfA + "A" + numOfB + "B";
    if (numOfA === 4) {
        res.Instruction = "win, all correct";
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

    correct = correct.length === 0 ? "" : correct.join(" and ") + " correct";
    wrongPosition = wrongPosition.length === 0 ? "" : wrongPosition.join(" and ") + " wrong position";
    res.Instruction = (correct !== '' && wrongPosition !== '') ? correct + ", " + wrongPosition : correct + wrongPosition;
    return res;
}

const guessNumber = (input, print) => {
    for (let i = 0; i < input.length; i++) {
        if (!inputValidation(input[i])) {
            print("Wrong Input，Input again");
        }
        print(getResult(input[i].split(' ').map(value => parseInt(value)), answer).Instruction);
    }
}

const inputValidation = (input) => {
    if (input.split(' ').length != 4 || new Set(input.split(' ').map(value => parseInt(value))).size < 4) {
        return false;
    }
    return true;
}
module.exports = guessNumber;
