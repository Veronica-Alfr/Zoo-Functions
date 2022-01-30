const data = require('../data/zoo_data');

const { species } = data;
const regions = ['NE', 'NW', 'SE', 'SW'];

const nameAnimals = (sorted, animal) => regions.reduce((acc, curr) => {
  acc[curr] = species.filter(({ location }) => location === curr)
    .map(({ name, residents }) => {
      if (!sorted) {
        return ({ [name]: residents.map((resident) => resident.name) });
      }
      return ({ [name]: residents.map((resident) => resident.name).sort() });
    });
  return acc;
}, {});

const nameBySex = (animal, sorted) => regions.reduce((acc, curr) => {
  acc[curr] = species.filter(({ location }) => location === curr)
    .map(({ name, residents }) => {
      if (animal.sex) {
        return ({ [name]: residents.filter(({ sex }) => sex === animal.sex)
          .map((nameAnimal) => nameAnimal.name) });
      }
    });
  return acc;
}, {});
console.log(nameBySex({ includeNames: true, sex: 'male' }));

function getAnimalMap(options) {
  console.log(options);
  if (!options || !options.includeNames) {
    return regions.reduce((acc, curr) => {
      acc[curr] = species.filter(({ location }) => location === curr).map(({ name }) => name);
      return acc;
    }, {});
  }
  const { sorted } = options;
  return (options.sorted ? nameAnimals(sorted) : nameAnimals());
}

// console.log(getAnimalMap({ includeNames: true }));

// Ajuda de Leandro Bonfim, Laís Nametala, Danillo Gonçalves, Imar Mendes, Leo Araújo

module.exports = getAnimalMap;

//     ✕ com a opção `sex: 'female'` ou `sex: 'male'` especificada, retorna somente nomes de animais macho/fêmea
//     ✕ com a opção `sex: 'female'` ou `sex: 'male'` especificada e a
//     opção `sort: true` especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados
