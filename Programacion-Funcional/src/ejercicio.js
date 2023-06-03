const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' },
];

const usersAsString = users.map(
  (user) => `${user.firstName}-${user.lastName}: ${user.role} `
);

const fullStackUsers = users.filter(
  (user) => user.role === 'Full Stack Resident'
);

const roles = users.map((users) => users.role);

const usersByRoles = roles.reduce((usersByRoles, rol) => {
  return {
    ...usersByRoles,
    [rol]: users.filter((user) => user.role === rol),
  };
}, {});

function findUser(userToFind) {
  return users.find(
    (user) =>
      user.firstName === userToFind.firstName &&
      user.lastName === userToFind.lastName
  );
}

console.log({
  usersAsString,
  fullStackUsers,
  usersByRoles,
  user: findUser({ firstName: 'Chloe', lastName: 'Alnaji' }),
});
