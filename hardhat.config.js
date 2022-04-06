require('dotenv').config();

require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: "0.8.4",
  networks:{
    //how to define which test network to deploy to
          rinkeby:{
    url:process.env.ALCHEMY_API_KEY_URL,
    accounts: [process.env.PRIVATE_KEY],
    } ,
    //How do we define which account to use for deployment
    },
    };

