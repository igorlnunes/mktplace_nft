require("@nomiclabs/hardhat-waffle");

const projectId = "5a2fbabccb774a38bc71d779a22"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: []
    },
    mainnet: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: []
    },
  },
  solidity: "0.8.4",
};
