const { graphql, buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    myname: String
    age:Float
  }
`);

// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  myname() {
    return "Miguel!";
  },
  age() {
    return 34.5;
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql({
  schema,
  source: "{myname, age}",
  rootValue,
}).then((response) => {
  console.log(response);
});
