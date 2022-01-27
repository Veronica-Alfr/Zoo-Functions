const data = require('../data/zoo_data');

const { species, hours } = data;
const weekdays = ['Tuesday', 'Thursday', 'Saturday', 'Sunday', 'Monday', 'Wednesday', 'Friday'];
const animals = ['lions', 'tigers', 'bears', 'penguins',
  'elephants', 'giraffes', 'otters', 'frogs', 'snakes'];

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

function getSchedule(scheduleTarget) {
  const infos = week();
  if (!scheduleTarget) return infos;
  if (animals.includes(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  if (weekdays.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: infos[scheduleTarget],
    };
  }
  return infos;
}
// Ajuda de Imar Mendes, Danillo Gonçalves, Alexandre Summoyama na mentoria do dia, e Roberval Filho na monitoria individual.

module.exports = getSchedule;
