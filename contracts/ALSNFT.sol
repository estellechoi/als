//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";

// import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ALSNFT is ERC721URIStorage, ERC165, Ownable {
    // using Counters for Counters.Counter;

    // default: 0, see https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol
    // Counters.Counter private tokenIds;

    constructor() ERC721("Alice Loves Sea NFT", "ALS") {
    }

    function mint(
        address _to,
        uint256 _tokenId,
        string memory _tokenURI
    ) public onlyOwner returns (uint256) {
        // tokenIds.increment(); // token ids created in order
        uint256 tokenId = _tokenId;
        _mint(_to, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        return tokenId;
    }
}
