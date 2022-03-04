const hre = require("hardhat");

async function main() {
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();
  console.log("nftMarket deployed to:", nftMarket.address);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarket.address); //referencia
  await nft.deployed();
  console.log('nft deployed to: ', nft.address);
  // const Klem = await hre.ethers.getContractFactory("Melk");
  // const klem = await Klem.deploy(); //referencia
  // await klem.deployed();
  // console.log('Klem Token deployed to: ', klem.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
