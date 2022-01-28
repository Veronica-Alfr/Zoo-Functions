const data = require('../data/zoo_data');

const { species } = data;
const regions = ['NE', 'NW', 'SE', 'SW'];
// const animals = ['lions', 'giraffes', 'tigers', 'bears', 'elephants', 'penguins', 'otters',
//   'frogs', 'snakes'];

// O código não lê o valor de sorted
function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return regions.reduce((acc, curr) => {
      acc[curr] = species.filter(({ location }) => location === curr).map(({ name }) => name);
      return acc;
    }, {});
  }
  if (options.includeNames) {
    return regions.reduce((acc, curr) => {
      acc[curr] = species.filter(({ location }) => location === curr).map(({ name }) => ({ name }));
      return acc;
    }, {});
  }
}
// Qualquer coisa muda o nome dos parâmetros e faz tudo separado, dps junta.
console.log(getAnimalMap({ includeNames: true }));

// return animals.reduce((acc, cur) => {
//   acc[cur] = species.filter(({ residents }) => residents.name === acc).map(({ name }) => name);
//   return acc;
// }, {});
// Ajuda de Leandro Bonfim, Laís Nametala, Danillo Gonçalves

module.exports = getAnimalMap;

// ✕ com a opção `includeNames: true` especificada, retorna nomes de animais (29ms)
//     ✕ com a opção `sorted: true` especificada, retorna nomes de animais ordenados (14ms)
//     ✕ com a opção `sex: 'female'` ou `sex: 'male'` especificada,
//     retorna somente nomes de animais macho/fêmea (9ms)
//     ✕ com a opção `sex: 'female'` ou `sex: 'male'` especificada e a
//     opção `sort: true` especificada, retorna somente
//     nomes de animais macho/fêmea com os nomes dos animais ordenados
