import '@nomiclabs/hardhat-waffle'
import { HardhatUserConfig, task } from 'hardhat/config'

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
	solidity: '0.8.4',
}

export default config
