const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((empregado) => empregado.managers.includes(id)); // Ajuda de Danillo Gonçalves
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const infoColaboradores = employees.filter((empregador) =>
      empregador.managers.includes(managerId));
    return infoColaboradores.map((contributors) =>
      `${contributors.firstName} ${contributors.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// Ajuda de Danillo Gonçalves, Raphael Martins e Laís Lametala

module.exports = { isManager, getRelatedEmployees };
