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

const nameBySex = (animal, sorted) => regions.reduce((acc, curr) => {
  acc[curr] = species.filter(({ location }) => location === curr)
    .map(({ name, residents }) => {
      if (sorted) {
        return ({ [name]: residents.filter(({ sex }) => sex === animal)
          .map((nameAnimal) => nameAnimal.name).sort() });
      }
      return ({ [name]: residents.filter(({ sex }) => sex === animal)
        .map((nameAnimal) => nameAnimal.name) });
    });
  return acc;
}, {});

const tratativa = (options) => {
  const { sorted, sex } = options;
  if (sex && sorted) {
    return nameBySex(sex, sorted);
  }
  if (sorted) {
    return nameAnimals(sorted);
  }
  if (sex) {
    return nameBySex(sex);
  }
  return nameAnimals();
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return regions.reduce((acc, curr) => {
      acc[curr] = species.filter(({ location }) => location === curr).map(({ name }) => name);
      return acc;
    }, {});
  }
  return (tratativa(options));
}

// Ajuda de Leandro Bonfim, Laís Nametala, Danillo Gonçalves, Imar Mendes, Leo Araújo, Sheila Nakashima

module.exports = getAnimalMap;
