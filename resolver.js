
const resolvers = {
  Query: {
    info: () => 'This is the GraphQL API for the used books app.',
    user: () => users[0],
    // feed: () => links,
    books: () => books[2]
  },
};

module.exports = resolvers;
