/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import dotenv from 'dotenv'
import { HardhatUserConfig, task } from 'hardhat/config'

dotenv.config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners()

	for (const account of accounts) {
		console.log(account.address)
	}
})

// https://hardhat.org/guides/typescript.html#type-safe-configuration
const config: HardhatUserConfig = {
	defaultNetwork: 'rinkeby',
	// to see how to config the networks, see https://hardhat.org/tutorial/deploying-to-a-live-network.html#deploying-to-remote-networks
	// to get RINKEBY-ETH to your account, see https://faucet.rinkeby.io/
	networks: {
		rinkeby: {
			url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env
				.ALCHEMY_API_KEY!}`,
			accounts: [`${process.env.RINKEBY_PRIVATE_KEY!}`],
		},
	},
	solidity: {
		version: '0.8.4',
		// solc optimizer options explained here: https://docs.soliditylang.org/en/v0.7.2/using-the-compiler.html#using-the-commandline-compiler
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
}

export default config
