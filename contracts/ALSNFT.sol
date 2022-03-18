//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ALSNFT is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private tokenIds;

    constructor() ERC721("Alice Loves Sea NFT", "ALS") {}

    function mint(address _toAddr, string memory _tokenURI)
        public
        returns (uint256)
    {}
}
