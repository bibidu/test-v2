import fs from 'fs'
import axios from 'axios'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

console.time('Sleep')
await sleep(2000)
console.timeEnd('Sleep')
fs.writeFileSync('./data.json', JSON.stringify({ a: 1 }), 'utf8')
// const url = "https://www.v2ex.com/api/nodes/list.json?fields=name,title,topics,aliases&sort_by=topics&reverse=1"
// // const url = "https://www.baidu.com";
// axios.get(url).then(console.log).catch(console.log);
