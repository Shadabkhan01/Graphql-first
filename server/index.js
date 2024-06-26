const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { name: "Pedro" };
  },
});

server.listen().then(({ url }) => {
  console.log(`Your api is running :) at : ${url}`);
});
