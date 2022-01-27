const data = require('../data/zoo_data');

const { species } = data;
const regions = ['NE', 'NW', 'SE', 'SW'];
// const [regionNE, regionNW, regionSE, regionSW] = regions;

function getAnimalMap(options) {
  if (!options || ({ sex: species.sex === 'female' } && { includeNames: false })
  || ({ sex: species.sex === 'female', sorted: true })) {
    return regions.reduce((acc, curr) => {
      acc[curr] = species.filter(({ location }) => location === curr).map(({ name }) => name);
      return acc;
    }, {});
  }
}

console.log(getAnimalMap({ sex: 'female', sorted: true }));

module.exports = getAnimalMap;
