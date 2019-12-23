# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 2019-12-23

- branch: chi
- description: Add Chicago data

### Added

- chiBox.geojson
- Chi.boundary.json
- Chi.neighborhoods.geojson
- Chi.neighborhoods.sample.geojson
- Chi.neighborhoods.json

https://data.cityofchicago.org/resource/y6yq-dbs2.geojson

### Updated

- nolaDataWork.js: Rename boxDataWork.js, refactor into a function that takes a city and spits out the polygon array


## [0.2.0] - 2019-12-19

- branch: nola
- description: init geolocation check, data grab, and geo match against data with NOLA data

### Added

Data

- NOLA.neighborhoods.geojson via [data.nola.gov](https://data.nola.gov/dataset/Neighborhood-Area-Boundary/7svi-kqix)
- NOLA.neighborhoods.json via [data.nola.gov](https://data.nola.gov/dataset/Neighborhood-Area-Boundary/7svi-kqix)
- NOLA.neighborhoods.sample.geojson for looking up the structure of the data w/ out loading such large files
- ~NOLA.hull.js for quicker lookup if point is in NOLA (quicker than looking through each neighborhood until finding a match)~ The hull as achieved via this library extends the actual boundary of the city. A better option for accurate quick lookup, is to use city boundary data provided by the city, as is the case with [NOLA](https://data.nola.gov/dataset/Orleans-Parish-Boundary/5jjm-ygfn)
- NOLA.boundary.geojson via [data.nola.gov](https://data.nola.gov/dataset/Orleans-Parish-Boundary/5jjm-ygfn)
- nolaDataWork.js: going forward with the idea of "creating a rough box around the city for initial quick lookup of which city is the user closest to. The idea is that, if the user is in this box (represented by four coordinates around the city based on the highest and lowest lat and longs of the city), then look up the user's coord against that city's neighborhoods.
- nolaBox.geojson: the basic box around NOLA for initial quick lookup
- NOLA.box.json: the data used in the app for looking up user's location in NOLA

npm packages

- parcel
- d3-polygon
- parcel-plugin-inliner

src files

- css/
- hood.js
- modules/

Static

- humans.txt

Project

- CHANGELOG.md

## [0.1.0] - 2019-11-25

- branch: master
- description: get a landing page up on a custom domain via netlify

### Added

- index.html
- README.md
- LICENSE
- .gitignore
