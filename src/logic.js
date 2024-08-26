// import { eventos } from "./mocks/eventos.json";
const eventos = require("./mocks/eventos.json");

function getRandomActions(event, numActions = 4) {
  const actions = event.actions;

  // Barajar el array de acciones usando el algoritmo de Fisher-Yates
  for (let i = actions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [actions[i], actions[j]] = [actions[j], actions[i]];
  }

  // Retornar las primeras `numActions` acciones del array barajado
  return actions.slice(0, numActions);
}

export function getUniqueElements(n, array = eventos) {
  const uniqueMap = new Map();

  // Agregar elementos únicos a un mapa
  array.forEach((item) => {
    if (!uniqueMap.has(item.id)) {
      uniqueMap.set(item.id, item);
    }
  });

  // Convertir el mapa a un array
  const uniqueArray = Array.from(uniqueMap.values());

  // Barajar el array usando el algoritmo de Fisher-Yates
  for (let i = uniqueArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [uniqueArray[i], uniqueArray[j]] = [uniqueArray[j], uniqueArray[i]];
  }

  // Array con los primeros n elementos del array único y aleatorio
  const newArray = uniqueArray.slice(0, n);

  return newArray.map((event) => {
    return {
      ...event,
      actions: getRandomActions(event),
    };
  });
}

// Usar la función
// const result = getUniqueElements(3);
// console.log(result);
