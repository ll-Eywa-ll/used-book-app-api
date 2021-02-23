const { nanoid } = require("nanoid");

const resolvers = {
  Query: {
    info: () => "This is the GraphQL API for the used books app.",

    getUserByEmailId: (_parent, args, context, _info) =>
      context.prisma.user.findUnique({
        where: {
          emailId: args.emailId,
        },
      }),
    
    getAllUsers: async (_parent, _args, context, _info) =>
      context.prisma.user.findMany(),
  },
  // All the mutation's resolver functions are described below
  Mutation: {
    createNewUser: (_parent, args, context, _info) => {
      const newUser = context.prisma.user.create({
        data: {
          id: nanoid(12),
          uuid: args.uuid,
          firstName: args.firstName,
          lastName: args.lastName,
          emailId: args.emailId,
          phoneNumber: args.phoneNumber,
        },
      });
      return newUser;
    },
  },
};

module.exports = resolvers;
