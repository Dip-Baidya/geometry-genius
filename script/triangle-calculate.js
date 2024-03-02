function calculateTriangleArea() {
    // Get Triangle Base Value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    // Get Triangle Height Value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleBaseInput.value;
    const height = parseFloat(triangleHeightText);

    // Calculte Triangle area
    const area = 0.5 * base * height;

    // Display triangle Area

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

}