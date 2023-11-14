import { printElements, printError } from "..";
import WeatherService from "./weather-service";

export default function getWeather(city) {
    let promise = WeatherService.getWeather(city);
    promise.then((response) => {
        printElements(response);
    }, (errorMessage) => {
        printError(errorMessage);
    });
}
