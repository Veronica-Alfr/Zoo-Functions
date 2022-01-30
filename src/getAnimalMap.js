const data = require('../data/zoo_data');

const { species } = data;
const regions = ['NE', 'NW', 'SE', 'SW'];

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return regions.reduce((acc, curr) => {
      acc[curr] = species.filter(({ location }) => location === curr).map(({ name }) => name);
      return acc;
    }, {});
  }
  return regions.reduce((acc, curr) => {
    acc[curr] = species.filter(({ location }) => location === curr)
      .map(({ name, residents }) => ({ [name]: residents.map((resident) => resident.name) }));
    return acc;
  }, {});
}

console.log(getAnimalMap({ includeNames: true }));

// Ajuda de Leandro Bonfim, Laís Nametala, Danillo Gonçalves, Imar Mendes

module.exports = getAnimalMap;

//     ✕ com a opção `sorted: true` especificada, retorna nomes de animais ordenados (14ms)
//     ✕ com a opção `sex: 'female'` ou `sex: 'male'` especificada,
//     retorna somente nomes de animais macho/fêmea (9ms)
//     ✕ com a opção `sex: 'female'` ou `sex: 'male'` especificada e a
//     opção `sort: true` especificada, retorna somente
//     nomes de animais macho/fêmea com os nomes dos animais ordenados
