
import { composeAPI, generateAddress } from '@iota/core'

const iota = composeAPI({
  //  provider: 'https://nodes.testnet.iota.org:443'
    provider: 'https://field.carriota.com:443'
})

iota.getNodeInfo()
    .then(info => {
        console.log(info);
        if (Math.abs(info['latestMilestoneIndex'] - info['latestSolidSubtangleMilestoneIndex']) > 3) {
            console.log('\r\nNode is probably not synced!');
        } else {
            console.log('\r\nNode is probably synced!');
            GetMyBalance();
        }

    })
    .catch(err => { console.log("get NodeInfo error=" + err) });


function GetMyBalance() {
    let MySeed = "WKQDUZTGFKSSLACUCHHLZRKZBHSDSCEBHKUPDLKFBQALEBKDMFRPUQGZRXAADPG9TSRTZGGBZOFRJCFMM";

    const myaddress1 = generateAddress(MySeed, 1);
    console.log("My address1: " + myaddress1)

    iota.getBalances([myaddress1], 100).then(({ balances }) => {
        console.log("Balance: " + balances)
    }).catch(err => { console.log("getBances err: " + err) })
}
