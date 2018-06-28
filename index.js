

import { composeAPI } from '@iota/core'

const iota = composeAPI({
    provider: 'https://nodes.testnet.iota.org:443'
})

console.log("Hello")
iota.getNodeInfo()
    .then(info => console.log(info))
    .catch(err => {console.log("error="+err)})