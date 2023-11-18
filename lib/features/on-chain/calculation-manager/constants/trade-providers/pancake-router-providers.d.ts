import { PancakeRouterBscProvider } from "../../providers/dexes/bsc/pancake-router-bsc/pancake-router-bsc-provider";
import { PancakeRouterEthereumProvider } from "../../providers/dexes/ethereum/pancake-router-ethereum/pancake-router-ethereum-provider";
import { PancakeRouterPolygonZkEvmProvider } from "../../providers/dexes/polygon-zkevm/pancake-router-polygon-zkevm/pancake-router-polygon-zkevm-provider";
export declare const pancakeRouterProviders: (typeof PancakeRouterBscProvider | typeof PancakeRouterEthereumProvider | typeof PancakeRouterPolygonZkEvmProvider)[];
