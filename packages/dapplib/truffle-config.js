require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remember method idea kiwi bubble talk'; 
let testAccounts = [
"0x1812f549089e24934f29b5a08c62e56c27d9bfd66d637fba0423b393f49adead",
"0x2712017fcce2ed2d25903e340944740caf04a4178528dcbc6f9ec4008a887814",
"0x8622295ff4a3e661823bf616cbfc2da5513d6c48d621f3ab96850c1dca2af77a",
"0x76a0de2dcb1b8cebb1c9b66e613f7b373818a50b1d768ab4fcd097963a5157fb",
"0x77ea9257dd58314a882ea8c187fa70db623cbcce0546a934a3600a029e88a7b6",
"0xaecd47f87f63cc7497ad1abdf87fb2308b3bb06994f24cc545556309d4a158f2",
"0xfa385453e2c006c9a52fa718138578bd42e2c4d258b0c5668ff0fe3234cd1d86",
"0xc5425ed927110cf9bb72521831a560e6eb8b78c81788875b8ebce80b46445e09",
"0xa45b8ee7fda46aac91c1c1d3dd285f0901568ab7f6a6ffc4a33b0c41da4d08e1",
"0xfb41d551edba5c054ab5f016900b6a433068ff64720065de8cd628f34c99ea2c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


