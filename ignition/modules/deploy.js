import "@nomicfoundation/hardhat-ethers";
import hardhat from "hardhat";

const { ethers } = hardhat;

async function main() {
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();

  await nft.waitForDeployment();

  console.log("NFT Contract Deployed at:", await nft.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
