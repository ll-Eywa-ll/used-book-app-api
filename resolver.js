let addresses = [
    {
        id: 'someAddressID',
        addressLine1: '2/3',
        addressLine2: 'Jharneshwar Complex',
        addressLine3: 'North T.T. Nagar',
        city: 'Bhopal',
        pinCode: '462003',
        province: 'Madhya Pradesh'
    }
];

let users = [

  {
    id: "someGeneratedID-1",
    uuid: "someUUID-1",
    firstName: "Sarthak",
    lastName: "Rohatgi",
    phoneNumber: "9165434960",
    emailID: "gaming0world726@gmail.com",
    addresses: [addresses[0]],
    books: [],
  },
  {
    id: "someGeneratedID-2",
    uuid: "someUUID-2",
    firstName: "Eywa",
    lastName: "Eywa",
    phoneNumber: "1234567890",
    emailID: "infinitybuisness726@gmail.com",
    addresses: [],
    books: [],
  },
  {
    id: "someGeneratedID-3",
    uuid: "someUUID-3",
    firstName: "Ceren",
    lastName: "Guleryuz",
    phoneNumber: "8465415445",
    emailID: "cerenglyz@gmail.com",
    addresses: [],
    books: [],
  },
];

let prices = [
    {
        price: 139,
        user: users[0]
    },
    {
        price: 13349,
        user: users[1]
    },
    {
        price: 17539,
        user: users[2]
    }
];

let books = [
  {
    id: "someBookID1",
    users: [users[1]],
    name: "Some Book Name1",
    isbn: "1234513591234",
    edition: 3,
    author: "N.D. Bhatt",
    status: "BUY",
    prices: [prices[0], prices[1], prices[2]]
  },
  {
    id: "someBookID2",
    users: [users[2]],
    name: "Some Book Name2",
    isbn: "1234545691234",
    edition: 1,
    author: "some suthor",
    status: "SOLD",
    prices: [prices[0], prices[1], prices[2]]
  },
  {
    id: "someBookID3",
    users: [users[0], users[2], users[1]],
    name: "Some Book Name3",
    isbn: "1234578991234",
    edition: 9,
    author: "I am the author",
    status: "FORSALE",
    prices: [prices[0], prices[1], prices[2]]
},
];


const resolvers = {
  Query: {
    user: () => users[0],
    // feed: () => links,
    books: () => books[2]
  },
};

module.exports = resolvers;
