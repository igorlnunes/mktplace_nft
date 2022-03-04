require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const privateKey = process.env.privateKey;
const rinkebyAPI = process.env.rinkebyAPI;

module.exports = {
  networks: {
    rinkeby: {
        url: `https://rinkeby.infura.io/v3/${rinkebyAPI}`,
        accounts: [`${privateKey}`]
      },
  },
  solidity: "0.8.4",
};