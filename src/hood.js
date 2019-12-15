(function() {
  const xmlhttp = new XMLHttpRequest(),
    method = 'GET',
    url = 'https://data.nola.gov/resource/abhb-x4ch.geojson';

  xmlhttp.open(method, url, true);

  xmlhttp.onload = function() {
    console.log(
      JSON.parse(this.responseText)
        .features.map(f => f.properties.gnocdc_lab)
        .sort()
    );
  };

  xmlhttp.send();
})();
