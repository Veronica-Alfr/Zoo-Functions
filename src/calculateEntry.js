const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const peoples = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((element) => {
    if (element.age < 18) {
      peoples.child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      peoples.adult += 1;
    }
    if (element.age >= 50) {
      peoples.senior += 1;
    }
  });
  return peoples;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const infoEntrants = countEntrants(entrants);
  let valueTotal = 0;
  valueTotal += prices.child * infoEntrants.child;
  valueTotal += prices.adult * infoEntrants.adult;
  valueTotal += prices.senior * infoEntrants.senior;
  return valueTotal;
}
// Ajuda de Imar Mendes, Thiago Zardo e Leo Araújo.
module.exports = { calculateEntry, countEntrants };
