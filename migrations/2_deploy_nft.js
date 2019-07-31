const TenkNFT = artifacts.require('tenknft');

module.exports = (deployer, network, accounts) => {

    let deployAddress = accounts[0]; 

    console.log('Preparing for deployment NFT...');
    console.log('deploying from:' + deployAddress);

    deployer.deploy(TenkNFT,'EcoToken','ETNFT');
};
