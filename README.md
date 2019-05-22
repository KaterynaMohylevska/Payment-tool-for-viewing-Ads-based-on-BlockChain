#Payment tool for viewing Ads based on BlockChain

##Prerequisites
1. Viewer -  Node Launcher testnet
follow instructions https://medium.com/lightning-power-users/easy-lightning-with-node-launcher-zap-488133edfbd
don't connect this wallet to Zap,  you can connect it to Joule extension
(before launch BTC create new folder for it and change path in Settings)
download from https://github.com/lightning-power-users/node-launcher/releases


2. Advertiser - Zap Desktop testnet
create new wallet testnet and launch BTC
download from https://github.com/LN-Zap/zap-desktop/releases

3. Set file admin.macaroon location of Node Launcher testnet to back-end/app.js to const ADVERTISER_MACAROON
Set file admin.macaroon location of Zap desktop testnet to back-end/app.js to const VIEWER_MACAROON


##To run follow:

`$ npm install`
`$ npm run build`
`$ npm run dev`
`$ node back-end/app.js`

