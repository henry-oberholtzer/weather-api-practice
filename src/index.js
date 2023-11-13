import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import getWeather from './js/weather';

export function printElements(apiResponse, city) {
    document.querySelector('#showResponse').innerText = `The humidity in ${city} is ${apiResponse.main.humidity}%.
    The temperature in Kelvin is ${apiResponse.main.temp} degrees.`;
}

export function printError(request, apiResponse, city) {
    document
        .querySelector('#showResponse')
        .innerText = `There was an error accessing the weather data for ${city}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
}

function handleFormSubmission(event) {
    event.preventDefault();
    const city = document.querySelector('#location').value;
    getWeather(city);
}

window.addEventListener("load", function() {
    this.document.querySelector('form').addEventListener('submit', handleFormSubmission);
})