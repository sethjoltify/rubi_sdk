"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubicProxyContractAddress = void 0;
const blockchain_name_1 = require("../../../../../../core/blockchain/models/blockchain-name");
exports.rubicProxyContractAddress = Object.values(blockchain_name_1.BLOCKCHAIN_NAME).reduce((acc, blockchain) => {
    let gateway = '0x3335733c454805df6a77f825f266e136FB4a3333';
    let router = '0x6AA981bFF95eDfea36Bdae98C26B274FfcafE8d3';
    if (blockchain === blockchain_name_1.BLOCKCHAIN_NAME.POLYGON) {
        gateway = '0x03EbC1d2d0e496CaF0232681069a3c5125894CbC';
        router = '0x9C57699576725ce531C4878DBe0E053B2f4A3619';
    }
    if (blockchain === blockchain_name_1.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN) {
        gateway = '0x7df26f8ad4195da3ffa7e4d888c4a13b2e4708ce';
        router = '0x9C57699576725ce531C4878DBe0E053B2f4A3619';
    }
    if (blockchain === blockchain_name_1.BLOCKCHAIN_NAME.ARBITRUM) {
        gateway = '0x578aAcb6457FA106196D24A97EA7d65Afb4286a6';
        router = '0x31655f1CC5D8167694032b21E59C96CbbDDA7316';
    }
    if (blockchain === blockchain_name_1.BLOCKCHAIN_NAME.TELOS) {
        router = '0xA2d8CF32C16f070702c45a5686Fdb0a1d7171AAD';
    }
    if (blockchain === blockchain_name_1.BLOCKCHAIN_NAME.ZK_SYNC) {
        router = '0xa63c029612ddaD00A269383Ab016D1e7c14E851D';
        gateway = '0x8E70e517057e7380587Ea6990dAe81cB1Ba405ce';
    }
    if (blockchain === blockchain_name_1.BLOCKCHAIN_NAME.LINEA ||
        blockchain === blockchain_name_1.BLOCKCHAIN_NAME.BASE ||
        blockchain === blockchain_name_1.BLOCKCHAIN_NAME.MANTLE ||
        blockchain === blockchain_name_1.BLOCKCHAIN_NAME.SCROLL) {
        router = '0xAf14797CcF963B1e3d028a9d51853acE16aedBA1';
    }
    if (blockchain === blockchain_name_1.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN_TESTNET ||
        blockchain === blockchain_name_1.BLOCKCHAIN_NAME.GOERLI ||
        blockchain === blockchain_name_1.BLOCKCHAIN_NAME.MUMBAI) {
        router = '0x093510EB0652E07024ec700C3CD1Fb1D79BA7fE9';
    }
    return { ...acc, [blockchain]: { gateway, router } };
}, {});
//# sourceMappingURL=rubic-proxy-contract-address.js.map