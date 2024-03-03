function calculateEllipseArea() {

    const majorRadius = getInputvalueById('ellipse-major-radius');
    const minnorRadius = getInputvalueById('ellipse-minnor-radius');
    const area = 3.14 * majorRadius * minnorRadius;

    setInnerTextById('ellipse-area', area);

}