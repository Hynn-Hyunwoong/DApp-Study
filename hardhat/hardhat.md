# how to create Hardhat Project 

```sh
npm install -g hardhat
```

# How to setting hardhat build(deploy)

1. Solidity Compailer Version Setting
```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
},
{
    solidity:"",
};

export default config;
```

If using Multiple version

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {version : "0.8.17"},
      {version : "0.6.6"}
    ]
  },
};


export default config;
```

2. Hardhat network setting (node, network)

Testnet RPC Node

ETH Public Node
Binance Smart-Chain
Klayten Public Node

```typescript
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
    ethereum : {
      url :"https://ethereum.mainnet-rpc.allthatnode.com",
      // accounts : {
      //   mnemonic : "test test test..."
      // }
      accounts : ["privateKey", "privateKey", "privateKey"]
    }
  },
};


export default config;
```

3. Mainnet -> Hardhat -> LoccalNode(forked)
Fork Setting

```typescript
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
```


4. Contract Test

- 무결성 검증
- 비용 절약 
- 시나리오별 테스트

### Step
1. Contract Setting for Deploy
2. Write Script
3. Launch to Script

# Toturial Contract depoly & test