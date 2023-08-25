/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'mumbai',
    networks: {
      hardhat: {},
      mumbai: {
        url: process.env.MUMBAI_RPC,
        accounts: [process.env.PRIVATE_KEY],
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
