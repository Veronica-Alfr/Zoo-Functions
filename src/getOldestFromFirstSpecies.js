const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const searchId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const searchInfos = species.find((animal) => animal.id === searchId).residents;
  const searchAnimal = searchInfos.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(searchAnimal);
}
// Ajuda de Alexandre Summoyama na mentoria do dia, Erick Lima e Lazaro Andriola.

module.exports = getOldestFromFirstSpecies;
