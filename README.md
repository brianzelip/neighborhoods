# Which neighborhood are you in?

Multi-city geolcation web app coming soon.

For now see [Which Baltimore neighborhood](https://github.com/brianzelip/which-baltimore-neighborhood).

## How it works

1. Get user coordinates via web browser
  a. If not available, show error message
2. Determine if user is near one of the cities (NOLA, Baltimore, Chicago, St. Louis, SF)
  a. If yes, go to step 3
  b. If no, show error message
3. Get the neighborhood data for nearby city
4. Run the user's coordinates against the neighborhood data
5. Update the DOM

## Neighborhood data

- [New Orleans](https://data.nola.gov/dataset/Neighborhood-Area-Boundary/7svi-kqix)
- [Chicago](https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Boundaries-Neighborhoods/bbvz-uum9)
- [LA](https://data.lacity.org/A-Well-Run-City/Neighborhoods/ykhe-zspy)
- [Portland, OR](http://gis-pdx.opendata.arcgis.com/datasets/9f50a605cf4945259b983fa35c993fe9_125/data)
- [Baltimore](https://data.baltimorecity.gov/Neighborhoods/Neighborhoods/5cni-ybar)
- DC
  - [39 neighborhood clusters](https://opendata.dc.gov/datasets/f6c703ebe2534fc3800609a07bad8f5b_17)
  - [44 neighborhood clusters](http://data.codefordc.org/dataset/neighborhood-boundaries-44-neighborhoods-department-of-planning)
