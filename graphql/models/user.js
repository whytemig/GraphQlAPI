export const typeDefs = `#graphql  
type Query{
    user:User
    movies:[Movies!]!
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
    }
    
    
    type Movies{
        id: String
        plot:String
        genres:[String]
        poster:String
        title:String
    }`;

export const userResolvers = {
  Query: {
    movies: (_, __, { data }) => {
      return [...data];
    },
  },
  Mutation: {
    createUser: (_, { user }, { data }) => {},
  },
  Movies: {
    id: (obj) => {
      return obj._id;
    },
  },
};
