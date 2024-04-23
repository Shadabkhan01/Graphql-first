const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL",
      },
      {
        id: 5,
        name: "Kelly",
        username: "kelly2019",
        age: 5,
        nationality: "CHILE",
      },
    ],
  },
  {
    id: 2,
    name: "Pedro",
    username: "PedroTech",
    age: 20,
    nationality: "BRAZIL",
  },
  {
    id: 3,
    name: "Sarah",
    username: "cameron",
    age: 25,
    nationality: "INDIA",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL",
      },
    ],
  },
  {
    id: 4,
    name: "Rafe",
    username: "rafe123",
    age: 60,
    nationality: "GERMANY",
  },
  {
    id: 5,
    name: "Kelly",
    username: "kelly2019",
    age: 5,
    nationality: "CHILE",
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublications: 2019,
    isInTheatres: true,
  },
  {
    id: 2,
    name: "Interstellar",
    yearOfPublications: 2007,
    isInTheatres: true,
  },
  {
    id: 3,
    name: "Superbad",
    yearOfPublications: 2009,
    isInTheatres: true,
  },
  {
    id: 4,
    name: "PedroTech The Movie",
    yearOfPublications: 2035,
    isInTheatres: false,
  },
];

module.exports = { UserList, MovieList };
