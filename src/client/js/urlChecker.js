function checkURL(inputText) {
    // function to validate url, as required.
    // input = string containing url
    // output = true or false (valid or not valid)
    console.log("::: Running checkURL :::", inputText);

    if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(inputText)) {
        console.log('Valid url');
        return true;
    } else {
        console.log('Not Valid url');
        return false
    }
}

export { checkURL }
