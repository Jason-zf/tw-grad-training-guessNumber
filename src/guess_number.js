const guessNumber = (input) => {
    if (!inputValidation(input)) {
        return "Wrong Input，Input again";
    }
}

const inputValidation = (input) => {
    if (input.toString().length != 4 || new Set(input) < 4) {
        return false;
    }
    return true;
}
module.exports = guessNumber;
