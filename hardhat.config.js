require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const privateKey = process.env.privateKey;
const rinkebyAPI = process.env.rinkebyAPI;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.projectId}`,
      accounts: [privateKey]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${rinkebyAPI}`,
      accounts: [`${privateKey}`]
    },
  },
  solidity: "0.8.4",
};