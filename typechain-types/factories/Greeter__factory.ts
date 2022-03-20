/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Greeter, GreeterInterface } from "../Greeter";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "greet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161086938038061086983398101604081905261002f9161017c565b61005b604051806060016040528060228152602001610847602291398261007560201b6101c41760201c565b805161006e9060009060208401906100e3565b50506102ff565b6100be828260405160240161008b929190610250565b60408051601f198184030181529190526020810180516001600160e01b03908116634b5c427760e01b179091526100c216565b5050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b8280546100ef906102ae565b90600052602060002090601f0160209004810192826101115760008555610157565b82601f1061012a57805160ff1916838001178555610157565b82800160010185558215610157579182015b8281111561015757825182559160200191906001019061013c565b50610163929150610167565b5090565b5b808211156101635760008155600101610168565b60006020828403121561018d578081fd5b81516001600160401b03808211156101a3578283fd5b818401915084601f8301126101b6578283fd5b8151818111156101c8576101c86102e9565b604051601f8201601f19908116603f011681019083821181831017156101f0576101f06102e9565b81604052828152876020848701011115610208578586fd5b61021983602083016020880161027e565b979650505050505050565b6000815180845261023c81602086016020860161027e565b601f01601f19169290920160200192915050565b6040815260006102636040830185610224565b82810360208401526102758185610224565b95945050505050565b60005b83811015610299578181015183820152602001610281565b838111156102a8576000848401525b50505050565b600181811c908216806102c257607f821691505b602082108114156102e357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6105398061030e6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a41368621461003b578063cfae321714610050575b600080fd5b61004e61004936600461030f565b61006e565b005b610058610132565b6040516100659190610404565b60405180910390f35b61011b6040518060600160405280602381526020016104e160239139600080546100979061048f565b80601f01602080910402602001604051908101604052809291908181526020018280546100c39061048f565b80156101105780601f106100e557610100808354040283529160200191610110565b820191906000526020600020905b8154815290600101906020018083116100f357829003601f168201915b505050505083610209565b805161012e906000906020840190610276565b5050565b6060600080546101419061048f565b80601f016020809104026020016040519081016040528092919081815260200182805461016d9061048f565b80156101ba5780601f1061018f576101008083540402835291602001916101ba565b820191906000526020600020905b81548152906001019060200180831161019d57829003601f168201915b5050505050905090565b61012e82826040516024016101da92919061041e565b60408051601f198184030181529190526020810180516001600160e01b0316634b5c427760e01b179052610255565b6102508383836040516024016102219392919061044c565b60408051601f198184030181529190526020810180516001600160e01b0316632ced7cef60e01b179052610255565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b8280546102829061048f565b90600052602060002090601f0160209004810192826102a457600085556102ea565b82601f106102bd57805160ff19168380011785556102ea565b828001600101855582156102ea579182015b828111156102ea5782518255916020019190600101906102cf565b506102f69291506102fa565b5090565b5b808211156102f657600081556001016102fb565b600060208284031215610320578081fd5b813567ffffffffffffffff80821115610337578283fd5b818401915084601f83011261034a578283fd5b81358181111561035c5761035c6104ca565b604051601f8201601f19908116603f01168101908382118183101715610384576103846104ca565b8160405282815287602084870101111561039c578586fd5b826020860160208301379182016020019490945295945050505050565b60008151808452815b818110156103de576020818501810151868301820152016103c2565b818111156103ef5782602083870101525b50601f01601f19169290920160200192915050565b60208152600061041760208301846103b9565b9392505050565b60408152600061043160408301856103b9565b828103602084015261044381856103b9565b95945050505050565b60608152600061045f60608301866103b9565b828103602084015261047181866103b9565b9050828103604084015261048581856103b9565b9695505050505050565b600181811c908216806104a357607f821691505b602082108114156104c457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a2646970667358221220e8ddfa8d063bfc7a405193f82aa7e6d03d8ed2c6c11e6f97b9e824c510e5800b64736f6c634300080400334465706c6f79696e67206120477265657465722077697468206772656574696e673a";

type GreeterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GreeterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Greeter__factory extends ContractFactory {
  constructor(...args: GreeterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Greeter";
  }

  deploy(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Greeter> {
    return super.deploy(_greeting, overrides || {}) as Promise<Greeter>;
  }
  getDeployTransaction(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_greeting, overrides || {});
  }
  attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }
  static readonly contractName: "Greeter";
  public readonly contractName: "Greeter";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreeterInterface {
    return new utils.Interface(_abi) as GreeterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}
