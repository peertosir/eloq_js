const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall',
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map((r) => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState('Post Office', [
  { place: 'Post Office', address: "Alice's House" },
]);

let next = first.move("Alice's House");

function runRobot(state, robot, memory) {
  console.log(state.parcels);

  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Выполнено за ${turn} ходов`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Переход в направлении ${action.direction}`);
  }
}

function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
  let parcels = [];

  for (let i = 0; i < parcelCount; i++) {
    const address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState('Post Office', parcels);
};
// Проба рандомного разноса посылок

// runRobot(VillageState.random(), randomRobot);

// Пердварительно составленный маршрут, который покрывает весь город
// Гарантировано за 2 прохода маршрута - все посылки будут забраны и доставлены
const mailRoute = [
  "Alice's House",
  'Cabin',
  "Alice's House",
  "Bob's House",
  'Town Hall',
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  'Shop',
  "Grete's House",
  'Farm',
  'Marketplace',
  'Post Office',
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

// runRobot(VillageState.random(), routeRobot, mailRoute);

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
      console.log(route);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
      console.log(route);
    }
  }
  console.log(route[0]);

  return { direction: route[0], memory: route.slice(1) };
}

//enchanced version of goalOrientedRobot which determines parcel with minimum to-go route to pickup
function goalMinOrientedRobot({ place, parcels }, route) {
  let minDistanceFrom = parcels.map(
    (p) => findRoute(roadGraph, place, p.place).length
  );
  let minParcel =
    parcels[minDistanceFrom.indexOf(Math.min(...minDistanceFrom))];
  if (route.length == 0) {
    let parcel = minParcel;
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
      console.log(route);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
      console.log(route);
    }
  }
  console.log(route[0]);

  return { direction: route[0], memory: route.slice(1) };
}

runRobot(VillageState.random(), goalOrientedRobot, []);

function runRobotSteps(state, robot, memory) {
  for (let turns = 0; ; turns++) {
    if (state.parcels.length == 0) return turns;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let resultsRobot1 = 0;
  let resultsRobot2 = 0;

  for (let i = 0; i < 100; i++) {
    let someState = VillageState.random();
    resultsRobot1 += runRobotSteps(someState, robot1, memory1);
    resultsRobot2 += runRobotSteps(someState, robot2, memory2);
  }

  return `First robot finished with ${
    resultsRobot1 / 100
  } steps in average\nSecond robot finished with ${
    resultsRobot2 / 100
  } steps in average`;
}

// console.log(compareRobots(goalOrientedRobot, [], routeRobot, mailRoute));
console.log(compareRobots(goalMinOrientedRobot, [], goalOrientedRobot, []));
