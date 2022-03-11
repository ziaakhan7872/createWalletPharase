const Web3 = require('web3')
const ethers = require('ethers')
let mnemonic = ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(16))
const wallet = ethers.Wallet.fromMnemonic(mnemonic)

let publicAddress = wallet.address
let privateKey = wallet.privateKey

console.log('publicAddress', publicAddress)

let gancheRPC = `HTTP://127.0.0.1:7545`

let bnbRPC = `https://data-seed-prebsc-1-s1.binance.org:8545/`

let ethRPC = `https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`

const web3 = new Web3(new Web3.providers.HttpProvider(ethRPC))

web3.eth
  .getBalance(publicAddress)
  .then((res) => console.log('res of balance', res))

web3.eth.getBalance(publicAddress).then(function (result) {
  console.log('fromWei balance', web3.utils.fromWei(result, 'ether'))
})

const account = web3.eth.accounts.privateKeyToAccount(privateKey)

web3.eth.accounts.wallet.add(account)
const trx = web3.eth.sendTransaction({
  from: account.address,
  to: '0x9C51C9bDa5e63c13c4CaF1b3Cf380aF3ad7aC70D',
  value: '100000000000000000',
  gasPrice: '2000000',
  gas: '21000',
})

console.log('trx', trx)

// web3.eth
//   .sendTransaction({
//     from: '0x9C51C9bDa5e63c13c4CaF1b3Cf380aF3ad7aC70D',
//     to: '0x2465a7E81D3b22CC831a1C4373FDc9EF7A7a0550',
//     value: web3.utils.toWei('1', 'ether'),
//   })
//   .then((res) => {
//     console.log('res', res)
//   })
