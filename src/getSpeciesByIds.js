// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((info) => ids.find((id) => (info.id === id ? info : '')));
}

// Ajuda de Leo Araújo.

module.exports = getSpeciesByIds;
