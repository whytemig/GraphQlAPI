import { createSchema, createYoga } from "graphql-yoga";

const schema = createSchema({
  typeDefs: `#graphql
    type Query{
        hello: String
    }
    `,
  resolvers: {
    Query: {
      hello: () => "Miguel",
    },
  },
});

export const yoga = createYoga({ schema });
