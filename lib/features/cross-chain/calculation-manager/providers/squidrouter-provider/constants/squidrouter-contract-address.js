"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquidrouterContractAddress = void 0;
const blockchain_name_1 = require("../../../../../../core/blockchain/models/blockchain-name");
const rubic_proxy_contract_address_1 = require("../../common/constants/rubic-proxy-contract-address");
const squidrouter_cross_chain_supported_blockchain_1 = require("./squidrouter-cross-chain-supported-blockchain");
exports.SquidrouterContractAddress = squidrouter_cross_chain_supported_blockchain_1.squidrouterCrossChainSupportedBlockchains.reduce((acc, blockchain) => {
    if (blockchain === blockchain_name_1.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN_TESTNET ||
        blockchain === blockchain_name_1.BLOCKCHAIN_NAME.GOERLI ||
        blockchain === blockchain_name_1.BLOCKCHAIN_NAME.MUMBAI)
        return {
            ...acc,
            [blockchain]: {
                providerRouter: '0xC3468a191Fe51815b26535ED1F82C1f79e6Ec37D',
                providerGateway: '0xC3468a191Fe51815b26535ED1F82C1f79e6Ec37D',
                rubicRouter: rubic_proxy_contract_address_1.rubicProxyContractAddress[blockchain].gateway
            }
        };
    return {
        ...acc,
        [blockchain]: {
            providerRouter: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
            providerGateway: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
            rubicRouter: rubic_proxy_contract_address_1.rubicProxyContractAddress[blockchain].gateway
        }
    };
}, {});
//# sourceMappingURL=squidrouter-contract-address.js.map