function calculateTriangle() {
    const trianglebaseInput = document.getElementById('triangle-base');
    const trianglebaseText = trianglebaseInput.value;
    const trianglebase = parseFloat(trianglebaseText);
    // console.log(typeof trianglebase)

    const triangleHeightInput = document.getElementById("triangle-height");
    const triangleHeightText = triangleHeightInput.value;
    const triangleheight = parseFloat(triangleHeightText);
    // console.log(triangleheight)
    triangleHeightInput.value = '';
    trianglebaseInput.value = '';

    const area = 0.5 * trianglebase * triangleheight;
    // console.log(area)

    const displayTriangle = document.getElementById('triangle-span')
    displayTriangle.innerText = area;
}