function inputEmpty(inputText) {
    // function to validate input not null, as required.
    // input = string/date
    // output = true(empty) or false(not empty)
    console.log("::: Running inputEmpty :::", inputText);
    if (inputText) {
        return false;
    } else {
        return true;
    }
}
export { inputEmpty }
