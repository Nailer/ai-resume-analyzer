import "@nomicfoundation/hardhat-ethers";
import { ethers } from "hardhat";

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
