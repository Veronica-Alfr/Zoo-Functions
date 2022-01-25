const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const infoAnimal = species.find((nameAnimal) => nameAnimal.name === animal);
  return infoAnimal.residents.every((animaleAge) => animaleAge.age >= age);
}

// Ajuda de Tiemi Faustino.

module.exports = getAnimalsOlderThan;
