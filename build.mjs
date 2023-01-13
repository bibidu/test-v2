import fs from 'fs'
import axios from 'axios'
import { execSync } from 'child_process'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

fs.writeFileSync('./data.json', JSON.stringify({ a: 123 }), 'utf8')
console.time('Sleep')
sleep(1000).then(() => {
  execSync('git add . && git commit -m "feat: auto" && git push')
})
console.timeEnd('Sleep')
// const url = "https://www.v2ex.com/api/nodes/list.json?fields=name,title,topics,aliases&sort_by=topics&reverse=1"
// // const url = "https://www.baidu.com";
// axios.get(url).then(console.log).catch(console.log);
