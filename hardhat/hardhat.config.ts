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
        url : "https://ethereum.mainnet-rpc.allthatnode.com",
        // blockNumber : 13100000
      },
      accounts:{
        mnemonic : "test test test...it's only",
        accountsBalance : "100000000000000000000000"
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
