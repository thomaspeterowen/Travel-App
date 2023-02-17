function spaceRemover(inputText) {
    // function to validate url, as required.
    // input = string containing url
    // output = true or false (valid or not valid)
    console.log("::: Running spaceRemover :::", inputText);

    var replaced = inputText.replace(/ /g, '+');
    return replaced;
}

export { spaceRemover }
