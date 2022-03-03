require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const projectId = process.env.projectId;
const privateKey = process.env.privateKey;

module.exports = {
  networks: {
    rinkeby: {
        url: `https://rinkeby.infura.io/v3/${rinkebyAPI}`,
        accounts: [`${privateKey}`]
      },
  },
  solidity: "0.8.4",
};