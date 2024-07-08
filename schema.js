//schema.js
//create a schema using GQL
//creating a schema for graphql
//creating a schema for graphql
//creating a schema for graphql
const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    getUsers(id: ID!): User
  }

  input createUserInput {
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    createUser(input: createUserInput!): User
    changePass(id: ID!, password: String!): User
  }
`;

module.exports = typeDefs;
