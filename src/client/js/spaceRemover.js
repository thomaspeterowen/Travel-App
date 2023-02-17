function spaceRemover(inputText) {
    // function to remove spaces from input text and replace with '+'
    // input = string to format
    // output = formatted string
    var replaced = inputText.replace(/ /g, '+');
    return replaced;
}

export { spaceRemover }
