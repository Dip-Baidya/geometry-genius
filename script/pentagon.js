function calculatePentagonArea() {
    const perimeter = getInputvalueById('pentagon-perimeter');
    const apothem = getInputvalueById('pentagon-apothem');
    console.log(perimeter,apothem)

    const area = 0.5 * perimeter * apothem;

    setInnerTextById('pentagon-area', area);

}

function getInputvalueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}