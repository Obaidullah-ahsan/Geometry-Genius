function calculateTriangle() {
    const trianglebaseInput = document.getElementById('triangle-base');
    const trianglebaseText = trianglebaseInput.value;
    const trianglebase = parseFloat(trianglebaseText);

    const triangleHeightInput = document.getElementById("triangle-height");
    const triangleHeightText = triangleHeightInput.value;
    const triangleheight = parseFloat(triangleHeightText);

    triangleHeightInput.value = '';
    trianglebaseInput.value = '';

    const triangleArea = 0.5 * trianglebase * triangleheight;


    const displayTriangle = document.getElementById('triangle-span')
    displayTriangle.innerText = triangleArea;
}

function calculateRectangle() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const rectangleWidth = parseFloat(rectangleWidthText);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const rectangleLength = parseFloat(rectangleLengthText);

    rectangleWidthInput.value = '';
    rectangleLengthInput.value = '';

    const rectangleArea = rectangleWidth * rectangleLength;

    const displayRectangle = document.getElementById('rectangle-span');
    displayRectangle.innerText = rectangleArea;
}


// parallelogram
function calculateParallelogram() {
    const parallelogramBase = getValueInputById('parallelogram-base')
    const parallelogramHeight = getValueInputById('parallelogram-height')
    const area = parallelogramBase * parallelogramHeight;
    setInnerTexById('parallelogram-span', area);
}
// Rhombus
function calculateRhombus() {
    const rhombusDiagonal1 = getValueInputById('rhombus-diagonal1')
    const rhombusDiagonal2 = getValueInputById('rhombus-diagonal2')
    const area = 0.5 * rhombusDiagonal1 * rhombusDiagonal2;
    setInnerTexById('rhombus-span', area);
}
// Pentagon
function calculatePentagon() {
    const pentagonPerimeter = getValueInputById('pentagon-perimeter')
    const pentagonApothem = getValueInputById('pentagon-apothem')
    const area = 0.5 * pentagonPerimeter * pentagonApothem;
    setInnerTexById('pentagon-span', area);
}

// Reuseable function
function getValueInputById(inputValue) {
    const inputfield = document.getElementById(inputValue);
    const inputValueText = inputfield.value;
    const inputValueRepeat = parseFloat(inputValueText);
    inputfield.value = '';
    return inputValueRepeat;
}

function setInnerTexById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}