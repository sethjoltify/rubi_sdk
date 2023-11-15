"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBridgersBlockchain = void 0;
const blockchain_name_1 = require("../../../../../core/blockchain/models/blockchain-name");
exports.toBridgersBlockchain = {
    [blockchain_name_1.BLOCKCHAIN_NAME.ETHEREUM]: 'ETH',
    [blockchain_name_1.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: 'BSC',
    [blockchain_name_1.BLOCKCHAIN_NAME.POLYGON]: 'POLYGON',
    [blockchain_name_1.BLOCKCHAIN_NAME.FANTOM]: 'FANTOM',
    [blockchain_name_1.BLOCKCHAIN_NAME.TRON]: 'TRON',
    [blockchain_name_1.BLOCKCHAIN_NAME.GOERLI]: 'GOERLI',
    [blockchain_name_1.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN_TESTNET]: 'BSCT',
    [blockchain_name_1.BLOCKCHAIN_NAME.MUMBAI]: 'MUMBAI'
};
//# sourceMappingURL=to-bridgers-blockchain.js.map