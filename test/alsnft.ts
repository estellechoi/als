/**
 * 1. ERC-721과 ERC-165 인터페이스를 구현했는지 검사
 * 2. 토큰 발행 후 해당 토큰의 소유자가 맞는지 검사
 * 3. 발행되지 않은 토큰을 소유한 계정이 있는지 검사
 * 4. 토큰 소유자의 토큰 개수가 맞는지 검사
 * 5. 토큰 발행 권한이 없는 사용자가 토큰을 발행했을 때 revert가 되는지 검사
 * 6. 토큰을 다른 계정에게 전송했을 때 수취인 계정이 토큰을 받았는지 검사
 * 7. 전송 후 정해진 이벤트가 발생하는지 검사
 * 8. 특정 토큰에 대해 전송 권한을 위임할 수 있는지 검사
 * 9. 위임 계정으로 토큰을 전송할 수 있는지 검사
 * 10. 위임을 철회했을 때 전송 권한이 없는지 검사
 *
 *  */

import { assert } from 'chai'
import { ethers } from 'hardhat'
import { ALSNFT } from '../typechain-types/ALSNFT'

let alsnft: ALSNFT

before(async () => {
	// to deploy, you should send RINK(Fake ETH) into the address that's going to make the deployment.
	const ALSNFT = await ethers.getContractFactory('ALSNFT')
	alsnft = await ALSNFT.deploy()
	await alsnft.deployed()
})

describe('ALSNFT', () => {
	it('Should implement ERC-721 and ERC-165', async () => {
		// to learn how to identify the interface, see https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified
		const ERC721IFID = '0x80ac58cd'
		const ERC165IFID = '0x80ac58cd'

		// to learn about supportsInterface, see https://docs.openzeppelin.com/contracts/2.x/api/introspection#IERC165
		// this function call must use less than 30 000 gas.
		const v1 = await alsnft.supportsInterface(ERC721IFID)
		const v2 = await alsnft.supportsInterface(ERC165IFID)

		assert.isOk(v1 && v2)
	})
})
