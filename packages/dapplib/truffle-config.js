require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush stock recipe stick mix harvest office army genius'; 
let testAccounts = [
"0xc92ae77b1e6015808b35727a9e1607de2512245e688412ef4f8453e211c219a5",
"0x29c6cf4bbb46c5780b4b7b1f79a53607a4ef58db5c411bfa44db6fdb61f67a15",
"0x91143bdcbf28ddccabcd431cf1a334c6b88798308c02a083be99dd8870105b43",
"0xedb88e617d6f2e26ea4db714aa22c937c24343fa838d3c3e3f491921f24c814a",
"0xc2459c347a8fae09229b0852c57d58c055e89929c33cbecb23c7483c88985bf8",
"0x2a5de3ba4bd8286d71ebd3c2ef533a76b146b7ccd7b84ddc80a59fabea8a6edd",
"0x276a598f084113589d17ff08e2620aea9349d5aa140164030e690a599d01d47e",
"0x2a3683cde4fc2c7d0c05d8cd0188ce610a08cd060526b22bff38e4683d437a7d",
"0x0305a25e4902289a0d7d077b0b9a59c120475551ac99d0bb762d79ca3a35ee73",
"0x4359d8edc3989e901dde22ed67ca78287f8aaeaaa526c318f17dfc34f6bb6eb1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

