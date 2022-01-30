const data = require('../data/zoo_data');

const { species } = data;
const regions = ['NE', 'NW', 'SE', 'SW'];

const nameAnimals = (sorted) => regions.reduce((acc, curr) => {
  acc[curr] = species.filter(({ location }) => location === curr)
    .map(({ name, residents }) => {
      if (!sorted) {
        return ({ [name]: residents.map((resident) => resident.name) });
      }
      return ({ [name]: residents.map((resident) => resident.name).sort() });
    });
  return acc;
}, {});

function getAnimalMap(options) {
  console.log(options);
  if (!options || !options.includeNames) {
    return regions.reduce((acc, curr) => {
      acc[curr] = species.filter(({ location }) => location === curr).map(({ name }) => name);
      return acc;
    }, {});
  }
  const { sorted } = options;
  if (options.sorted) {
    return nameAnimals(sorted);
  }
  return nameAnimals();
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
