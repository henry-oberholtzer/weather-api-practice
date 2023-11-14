import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import getWeather from './js/weather';

export function printElements(response, city) {
    document.querySelector('#showResponse').innerText = `The humidity in ${city} is ${response.main.humidity}%.
    The temperature in Kelvin is ${response.main.temp} degrees.`;
}

export function printError(error) {
    document
        .querySelector('#showResponse')
        .innerText = `There was an error accessing the weather data for ${city}: ${error}.`;
}

function handleFormSubmission(event) {
    event.preventDefault();
    const city = document.querySelector('#location').value;
    getWeather(city);
}

window.addEventListener("load", function() {
    this.document.querySelector('form').addEventListener('submit', handleFormSubmission);
})