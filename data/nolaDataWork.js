// output a rectangle around NOLA for quick isNearNola() lookup before filtering through NOLA neighborhoods

const fs = require('fs');

const data = JSON.parse(fs.readFileSync('NOLA.boundary.geojson', 'UTF8'));

// console.log(data);

const N = data.features.map(f => f.geometry.coordinates[0][0]);

const allPoints = N[0];

const allLongs = allPoints.map(arr => arr[0]);
const allLats = allPoints.map(arr => arr[1]);

const lowestLat = allLats.sort()[0];
const highestLat = allLats.sort()[allLats.length - 1];
const lowestLong = allLongs.sort()[0];
const highestLong = allLongs.sort()[allLongs.length - 1];

console.log('lowestLat:', lowestLat);
console.log('highestLat:', highestLat);
console.log('lowestLong:', lowestLong);
console.log('highestLong:', highestLong);

/**
 * high lat = north
 * low lat = south
 * high long = west
 * low long = east
 */

const box = {
  NW: [highestLong, highestLat],
  NE: [lowestLong, highestLat],
  SE: [lowestLong, lowestLat],
  SW: [highestLong, lowestLat]
};

const polygon = [box.NW, box.NE, box.SE, box.SW];

console.log('NOLA polygon!', polygon);
