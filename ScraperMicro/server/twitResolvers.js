const { Org, Tweet } = require('../dataBase/dbIndex.js');

module.exports = {
  Query: {
    allOrgs: () => Org.findAll({ attributes: 'orgName' }),
  },
  // Mutation: {
  //   addTweets: (root, args) => {
  //     const Tweet = { tweets: [tweet]};
  //   },
  // },
};
