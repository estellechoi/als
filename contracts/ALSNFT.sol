//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ALSNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private tokenIds;

    constructor() ERC721("Alice Loves Sea NFT", "ALS") {
        _transferOwnership(_msgSender());
    }

    function mint(
        address _toAddr,
        uint256 _tokenId,
        string memory _tokenURI
    ) public onlyOwner returns (uint256) {
        // tokenIds.increment(); // token ids created in order
        uint256 newItemId = _tokenId;
        _mint(_toAddr, newItemId);
        _setTokenURI(newItemId, _tokenURI);
        return newItemId;
    }
}
