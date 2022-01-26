const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const obj = {};
  if (!animal) {
    species.forEach((namesSpecies) => { obj[namesSpecies.name] = namesSpecies.residents.length; });
    // a linha acima atribui uma chave para obj que é o nome da especie colocada.
    return obj;
  }
  const infoSpecie = species.find((specieAnimal) => specieAnimal.name === animal.specie);
  if (!animal.sex) {
    return infoSpecie.residents.length;
  }
  return infoSpecie.residents.filter((specieBySex) => specieBySex.sex === animal.sex).length;
}
// Ajuda de Imar Mendes.

module.exports = countAnimals;
