function getInnerTextById(id) {
    const elementString = document.getElementById(id).innerText;
    const stringToNumber = parseInt(elementString);
    return stringToNumber
}

function setInnerTextByIdAndValue(id, value) {
    const element = document.getElementById(id);
    element.innerText = value
}