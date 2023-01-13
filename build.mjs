import fs from 'fs'
import axios from 'axios'
import { execSync } from 'child_process'

const url = "https://v2ex.com/api/topics/hot.json"
// const url = "https://www.baidu.com";
axios.get(url).then(res => {
  console.log(res.data)
}).catch(console.log);
