const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;

  if (!employeeName) {
    return {};
  }

  return employees.find((nameEmployee) =>
    nameEmployee.firstName === employeeName || nameEmployee.lastName === employeeName);
}

console.log(getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
