// Data
const users = [
  {
    login: "knuth",
    firstName: "Donald",
    lastName: "Knuth",
    likes: ["C", "Unix"],
  },
  {
    login: "norvig",
    firstName: "Peter",
    lastName: "Norvig",
    likes: ["AI", "Search", "NASA", "Mars"],
  },
  {
    login: "mfowler",
    firstName: "Martin",
    lastName: "Fowler",
    likes: ["Design Patterns", "Refactoring"],
  },
  {
    login: "kent",
    firstName: "Kent",
    lastName: "Beck",
    likes: ["TDD", "wikis", "Design Patterns"],
  },
];

// lookup()
const lookup = (login, property) => {
  const user = users.find((user) => user.login === login);

  if (user) {
    if (user[property]) {
      return user[property];
    } else {
      throw new Error(/Could not find property/);
    }
  }

  throw new Error(/Could not find user/);
};

module.exports = {
  lookup,
};
