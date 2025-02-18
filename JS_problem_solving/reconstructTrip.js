// You are given a list of cities and the distances between each pair of cities.

// #1
function reconstructTrip(tickets) {
  const cityMap = {};
  const route = [];

  for (let i = 0; i < tickets.length; i++) {
    cityMap[tickets[i].from] = tickets[i].to;
  }

  let startCity = Object.keys(cityMap).find(
    (from) => !Object.values(cityMap).includes(from)
  );

  for (let i = 0; i < tickets.length; i++) {
    if (!startCity) break;
    route.push({ from: startCity, to: cityMap[startCity] });
    startCity = cityMap[startCity];
  }

  return route;
}

// #2
function reconstructTrip2(tickets) {
  const cityMap = new Map();
  const destinations = new Set();
  const route = [];

  for (const { from, to } of tickets) {
    cityMap.set(from, to);
    destinations.add(to);
  }

  let startCity = [...cityMap.keys()].find((city) => !destinations.has(city));

  while (startCity && cityMap.has(startCity)) {
    route.push({ from: startCity, to: cityMap.get(startCity) });
    startCity = cityMap.get(startCity);
  }

  return route;
}

console.log(
  reconstructTrip([
    { from: "Chicago", to: "Winnipeg" },
    { from: "Halifax", to: "Montreal" },
    { from: "Montreal", to: "Toronto" },
    { from: "Toronto", to: "Chicago" },
    { from: "Winnipeg", to: "Seattle" },
  ])
);

console.log(
  reconstructTrip2([
    { from: "Chicago", to: "Winnipeg" },
    { from: "Halifax", to: "Montreal" },
    { from: "Montreal", to: "Toronto" },
    { from: "Toronto", to: "Chicago" },
    { from: "Winnipeg", to: "Seattle" },
  ])
);
