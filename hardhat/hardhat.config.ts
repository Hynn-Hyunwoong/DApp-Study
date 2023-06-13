import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {version : "0.8.17"},
      {version : "0.6.6"}
    ]
  },
  networks: {
    hardhat:{
      forking : {
        url : "https://bsc-dataseed1.binance.org/",
        // blockNumber : 13100000
      },
      accounts:{
        mnemonic : "test test test test test test test test test test test junk",
        accountsBalance : "100000000000000000000000" // 10 ** 23 
      }
    },
    ethereum : {
      url :"https://ethereum.mainnet-rpc.allthatnode.com",
      accounts : {
        mnemonic : "test test test..."
      }
      // accounts : ["privateKey", "privateKey", "privateKey"]
    }
  },
};


export default config;
