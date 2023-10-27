let degreeEl = document.getElementById('degree');
let tempType = document.getElementById('temp-type');
let btn = document.getElementById('btn');
let result = document.getElementById('result')

btn.addEventListener('click', () => {
    console.log("clicked");
    convertToCelsius();
})

function convertToCelsius() {
    let inputValue = degreeEl.value;

    if (tempType.value === "fahrenheit") {
        let fahrenheitToCelsius = ((inputValue - 32) * (5 / 9));
        result.innerHTML = `${fahrenheitToCelsius.toFixed(5)} &deg`;
    }
    else if (tempType.value === "kelvin") {
        let kelvinToCelsius = (inputValue - 273.15);
        result.innerHTML = `${kelvinToCelsius.toFixed(5)} &deg`;
    }
    else {
        alert("select a valid option ")
    }
}