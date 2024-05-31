export const typeDefs = `#graphql  
type Query{
    user:User
}
type User{
        id:Int
        name:String
    }`;

export const userResolvers = {
  Query: {
    user: () => {
      return { id: 1, name: "Miguels" };
    },
  },
  //   making a resolver for the User object type
  User: {
    name: ({ name }) => name.toUpperCase(),
  },
};
