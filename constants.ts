const{ WsProvider } = require('polkApi')
export const PROVIDER = new WsProvider('wss://kusama-rpc.polkadot.io/')
export const INDEXER = 'https://kusama.indexer.gc.subsquid.io/v4/graphql'