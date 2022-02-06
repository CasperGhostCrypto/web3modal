// import { IAbstractConnectorOptions } from "../../helpers";

// interface IDefiWalet extends IAbstractConnectorOptions {
//   apiKey: string;
// }

const ConnectToDefiWallet = async (
  DefiWeb3Connector: any,
  opts: any
) => {

  // const connector = new DeFiWeb3Connector({
  //   supportedChainIds: [1],
  //   rpc: {
  //     1: "https://mainnet.infura.io/v3/INFURA_API_KEY",
  //     25: "https://evm-cronos.crypto.org/", // cronos mainet
  //   },
  //   pollingInterval: 15000,
  // });

  DefiWeb3Connector.activate();
  const provider = await DefiWeb3Connector.getProvider();

  return provider;
};

export default ConnectToDefiWallet