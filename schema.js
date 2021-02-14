// import { gql } from 'gql';

const typeDefs = `
  """
  This is a User Type and contains all the user personal information
  Required Fields are - id, firstName, lastName, emailID, books
  """
  type User {
    id: ID!
    uuid:ID
    firstName: String!
    lastName: String!
    phoneNumber: String
    emailID: String!
    addresses: [Address!]
    books: [Book!]!
  }

  type Book {
    id: ID!
    name: String!
    isbn: String
    edition: Int
    author: String!
    imgUrl: String
    status: Status
    prices: [Price!]!
  }

  type Price {
    book: Book
    price: Float!
    user: User!
  }

  enum Status {
    BUY
    SOLD
    FORSALE
  }

  type Address {
    id: ID!
    user: User
    addressLine1: String!
    addressLine2: String
    addressLine3: String
    pinCode: String!
    city: String!
    province: String!
  }

  type Query {
    user: User
    books: Book
  }
`;

module.exports = typeDefs;