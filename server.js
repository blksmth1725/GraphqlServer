const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} = require("graphql");
const app = express();

app.use("/graphql", graphqlHTTP({ graphiql: true }));
app.listen(5000, () => console.log("Server Running"));
