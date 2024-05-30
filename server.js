const { graphql, buildSchema } = require("graphql");
const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const { ruruHTML } = require("ruru/server");
const app = express();

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    myname: String
    hello(name:String):String!
  }
`);

// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  myname() {
    return "Miguel!";
  },
  hello: ({ name }) => `Hi there, ${name}!!`,
};

app
  .all(
    "/graphql",
    createHandler({
      schema,
      rootValue,
    })
  )
  .get("/", (_req, res) => {
    res.type("html");
    res.end(ruruHTML({ endpoint: "/graphql" }));
  })
  .listen(4000);
console.log("Running on http://localhost:4000");
