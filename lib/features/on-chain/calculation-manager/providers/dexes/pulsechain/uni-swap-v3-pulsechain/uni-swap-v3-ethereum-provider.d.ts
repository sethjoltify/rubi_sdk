import { UniswapV3AbstractProvider } from '../../common/uniswap-v3-abstract/uniswap-v3-abstract-provider';
import { UniswapV3QuoterController } from '../../common/uniswap-v3-abstract/utils/quoter-controller/uniswap-v3-quoter-controller';
import { UniSwapV3PulsechainTrade } from './uni-swap-v3-ethereum-trade';
export declare class UniSwapV3PulsechainProvider extends UniswapV3AbstractProvider<UniSwapV3PulsechainTrade> {
    readonly blockchain: "PULSECHAIN";
    readonly OnChainTradeClass: typeof UniSwapV3PulsechainTrade;
    readonly providerConfiguration: import("../../common/uniswap-v3-algebra-abstract/models/uniswap-v3-algebra-provider-configuration").UniswapV3AlgebraProviderConfiguration;
    readonly routerConfiguration: import("../../common/uniswap-v3-abstract/models/uniswap-v3-router-configuration").UniswapV3RouterConfiguration<"USDT" | "USDC" | "WETH" | "WBTC" | "DAI">;
    protected readonly quoterController: UniswapV3QuoterController;
}
