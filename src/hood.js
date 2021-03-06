import { polygonContains } from 'd3-polygon';

import nolaBox from '../data/NOLA.box.json';
const pointInNOLA = [-90.103324, 29.992867];

(function() {
  if (!navigator.geolocation) {
    alert(
      "Sorry, the web browser can not get your device's location ☹. Maybe try updating the browser?"
    );
    return;
  } else {
    function geo_success(position) {
      const long = position.coords.longitude;
      const lat = position.coords.latitude;
      const point = [long, lat];

      console.log('point:::::::', point);

      if (polygonContains(nolaBox, point)) {
        const xmlhttp = new XMLHttpRequest(),
          method = 'GET',
          url = 'https://data.nola.gov/resource/abhb-x4ch.geojson';

        xmlhttp.open(method, url, true);

        xmlhttp.onload = function() {
          const data = JSON.parse(this.responseText);

          const HOOD = data.features.filter(feature => {
            const polygon = feature.geometry.coordinates[0][0];
            return polygonContains(polygon, point);
          });

          const hoodName = HOOD[0].properties.gnocdc_lab;

          const answerEl = document.querySelector('[data-answer]');

          function titleCase(word) {
            return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
          }
          answerEl.innerHTML = `${titleCase(hoodName)}, New Orleans`;

          console.log('hoodName!', hoodName, answerEl);
        };
        xmlhttp.send();
      } else {
        const answerEl = document.querySelector('[data-answer]');
        answerEl.innerHTML = `Sorry, we don't do that city 🤷`;
      }
    }

    function geo_error() {
      alert(
        `Your position is not available. Maybe try turning on location services for your web browser.`
      );
    }

    var geo_options = {
      enableHighAccuracy: true
    };

    navigator.geolocation.getCurrentPosition(
      geo_success,
      geo_error,
      geo_options
    );
  }
})();
