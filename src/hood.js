import { polygonContains } from 'd3-polygon';

(function() {
  const xmlhttp = new XMLHttpRequest(),
    method = 'GET',
    url = 'https://data.nola.gov/resource/abhb-x4ch.geojson';

  xmlhttp.open(method, url, true);

  xmlhttp.onload = function() {
    const data = JSON.parse(this.responseText);

    const neighborhoodNames = data.features
      .map(f => f.properties.gnocdc_lab)
      .sort();
    console.log('neighborhoodNames\n', neighborhoodNames);

    const neighborhoodBoundaries = data.features.map(
      f => f.geometry.coordinates[0][0]
    );
    console.log('neighborhoodBoundaries:\n', neighborhoodBoundaries);

    const pointInNOLA = [-90.103324, 29.992867];
  };

  xmlhttp.send();
})();
