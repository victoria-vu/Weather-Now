import ClearSky from "./assets/clear-sky.svg";
import FewClouds from "./assets/few-clouds.svg";
import BrokenClouds from "./assets/broken-clouds.svg";
import Cloudy from "./assets/cloudy.svg";
import ShowerRain from "./assets/shower-rain.svg";
import Rain from "./assets/rain.svg";
import Thunderstorm from "./assets/thunderstorm.svg";
import Snow from "./assets/snow.svg";
import Mist from "./assets/mist.svg";

export const weatherStatus = {
  "Clear Sky": { 
    icon: ClearSky,
    background: "app clear-sky" 
    },
  "Few Clouds": {
    icon: FewClouds,
    background: "app mostly-cloudy"
    },
  "Scattered Clouds": {
    icon: BrokenClouds,
    background: "app mostly-cloudy"
    },
  "Broken Clouds": {
    icon: BrokenClouds,
    background: "app cloudy"
    },
  "Overcast Clouds": {
    icon: Cloudy,
    background: "app cloudy"
    },
  "Shower Rain": {
    icon: ShowerRain,
    background: "app rainy"
    },
  "Light Rain": {
    icon: Rain,
    background: "app rainy"
    },
  "Rain": {
    icon: Rain,
    background: "app rainy"
    },
  "Thunderstorm": {
    icon: Thunderstorm,
    background: "app stormy"
    },
  "Light Snow": {
    icon: Snow,
    background: "app snowmist"
    },
  "Snow": {
    icon: Snow,
    background: "app snowmist"
    },
  "Mist": {
    icon: Mist,
    background: "app snowmist"
    }
};