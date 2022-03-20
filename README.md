# ALS: Alice Loves Sea NFT

This project is for self-teaching, so reciting the steps you would take for configuring, testing and deploying.

<br />

## 1. Get Rinkeby testnet API key and add to your wallet

I used [Alchemy](https://www.alchemy.com/), where you may go get your API key for Rinkeby testnet. Once you add the testnet to Metamask using your RPC url and chain ID, you will see an account given. you can find some detailed tutorials here: [3 Steps to Fix Slow Metamask Transactions, For Free](https://blog.alchemy.com/blog/supercharge-metamask)

Save your Alchemy API key and your private key for your Rinkeby account in your environment file like the following, otherwise add as GitHub Secrets for Actions setup you would choose. To export your private key from Metamask, open Metamask and go to Account Details > Export Private Key. Be aware of NEVER putting real Ether into testing accounts.

```
ALCHEMY_API_KEY=00000000000000000000000000000000
RINKEBY_PRIVATE_KEY=0000000000000000000000000000000000000000000000000000000000000000
```

<br />

## 2. Configure the networks you will use in Hardhat config file

Unless setting the `defaultNetwork`, the built-in hardhat network will be used by default. For more details about networks configuration, see [Deploying to remote networks](https://hardhat.org/tutorial/deploying-to-a-live-network.html#deploying-to-remote-networks).

```typescript
// hardhat.config.ts

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '@nomiclabs/hardhat-waffle'
import { HardhatUserConfig, task } from 'hardhat/config'

// ..

const config: HardhatUserConfig = {
 defaultNetwork: 'rinkeby',
 networks: {
  rinkeby: {
   url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env
    .ALCHEMY_API_KEY!}`,
   accounts: [`${process.env.RINKEBY_PRIVATE_KEY!}`],
  },
 },
 // ..
}

export default config
```

<br />

## 3. send RINK(Fake ETH)

To deploy, you should send RINK(Fake ETH) into the address that's going to make the deployment. You can get some ETH for the Rinkeby testnet following this link:

- [Rinkeby Authenticated Faucet](https://faucet.rinkeby.io/)

<br />

---

### References

- [Setting up a project | Hardhat](https://hardhat.org/guides/project-setup.html)
- [TypeScript Support | Hardhat](https://hardhat.org/guides/typescript.html)
- [3 Steps to Fix Slow Metamask Transactions, For Free](https://blog.alchemy.com/blog/supercharge-metamask)
