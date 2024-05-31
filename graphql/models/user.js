export const typeDefs = `#graphql  
type Query{
    user:User
}
type Mutation{
    createUser(user:Userfield!):User
}

"input"
input Userfield{
    name:String
    age:Int
}


"types"
type User{
        id:Int
        name:String
        age:Int
    }`;

export const userResolvers = {
  Query: {
    user: () => {
      return { id: 1, name: "Miguels" };
    },
  },
  Mutation: {
    createUser: (_, { user }) => {
      return { ...user };
    },
  },
  //   "making a resolver for the User object type"
  User: {
    name: ({ name }) => name.toUpperCase(),
  },
};
