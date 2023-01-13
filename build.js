const axios = require("axios");

const url = "https://www.v2ex.com/api/nodes/list.json?fields=name,title,topics,aliases&sort_by=topics&reverse=1"
// const url = "https://www.baidu.com";
axios.get(url).then(console.log).catch(console.log);
