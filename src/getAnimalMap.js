const data = require('../data/zoo_data');

const { species } = data;
const regions = ['NE', 'NW', 'SE', 'SW'];

// O código não lê o valor de sorted
function getAnimalMap(options) {
  if (!options || (options.sex === 'female' && (!options.includeNames || options.sorted))) {
    return regions.reduce((acc, curr) => {
      acc[curr] = species.filter(({ location }) => location === curr).map(({ name }) => name);
      return acc;
    }, {});
  }
}

const nameAnimals = () => {

};

// Ajuda de Leandro Bonfim

module.exports = getAnimalMap;

// ✕ com a opção `includeNames: true` especificada, retorna nomes de animais (29ms)
//     ✕ com a opção `sorted: true` especificada, retorna nomes de animais ordenados (14ms)
//     ✕ com a opção `sex: 'female'` ou `sex: 'male'` especificada,
//     retorna somente nomes de animais macho/fêmea (9ms)
//     ✕ com a opção `sex: 'female'` ou `sex: 'male'` especificada e a
//     opção `sort: true` especificada, retorna somente
//     nomes de animais macho/fêmea com os nomes dos animais ordenados
