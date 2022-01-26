const data = require('../data/zoo_data');

const { species, hours } = data;

const week = () => {
  const days = Object.keys(hours);
  return days.reduce((acc, curr) => {
    if (curr !== 'Monday') {
      acc[curr] = {
        officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
        exhibition: species.filter((specie) => specie.availability.includes(curr))
          .map((specie) => specie.name),
      };
    } else {
      acc[curr] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
    return acc;
  }, {});
};
// { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }
console.log(week());
function getSchedule(scheduleTarget) {
  return week();
}
// Ajuda de Imar Mendes.
module.exports = getSchedule;
