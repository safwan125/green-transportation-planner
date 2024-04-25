function calculateCarbonFootprint() {
    const carType = document.getElementById('car-type').value;
    const mileage = parseFloat(document.getElementById('mileage').value);
    const distance = parseFloat(document.getElementById('distance').value);
    let emissionFactor;
    switch (carType) {
        case 'sedan':
            emissionFactor = 0.25; // in kgCO2 per mile
            break;
        case 'suv':
            emissionFactor = 0.30;
            break;
        case 'compact':
            emissionFactor = 0.20;
            break;
        default:
            emissionFactor = 0;
    }
    const carbonFootprint = (emissionFactor * distance * 1000) / mileage; // Conversion: 1 mile = 1609.34 meters
    document.getElementById('result').innerText = `Your carbon footprint is ${carbonFootprint.toFixed(2)} kgCO2.`;
}
function scrolldiv() {
    var elem = document.getElementsById("intro1");
    elem.scrollIntoView();
}