function calculateRectAngleArea() {
    // Find Length
    const lenghthInput = document.getElementById('rectangle-length');
    const rectAngleLengthText = lenghthInput.value;
    length = parseFloat(rectAngleLengthText);

    // Find Width
    const widthInput = document.getElementById('rectangle-height');
    const rectangleHeightText = widthInput.value;
    width = parseFloat(rectangleHeightText);

    // Final Calculation

    const area = length * width;

    // Display Area

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}