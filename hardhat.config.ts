import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  //   networks: {
  //   mumbai: {
  //     url: "YOUR_QUICKNODE_MUMBAI_URL",
  //     accounts: ["YOUR_TEST_WALLET_PRIVATE_KEY"],
  //   }
  // }
  networks: {
    mumbai: {
      url: process.env.MUMBAI_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    }
  }
};
export default config;
