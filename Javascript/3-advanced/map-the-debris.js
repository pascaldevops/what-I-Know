function orbitalPeriod(arr) {
  var temp = arr.map(listItem);
  return temp;
}

function listItem(val) {
  var obj = {}; // hold objects
  obj.name = val.name;
  obj.orbitalPeriod = calculateOrbitalPeriod(val.avgAlt);
  return obj;
}

function calculateOrbitalPeriod(avgAlt) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var PI = 3.14159265359;
  var a = Math.pow(avgAlt + earthRadius, 3);

  return Math.round(2 * PI * Math.sqrt(a / GM));
}

var result = orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
console.log(result);

result = orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 }
]);
console.log(result);
