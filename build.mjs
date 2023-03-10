import fs from "fs";
import axios from "axios";
import { execSync } from "child_process";

function sendMessage(text) {
  const iconUrl = `https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/mirror-assets/168e0858b6ccfd57fe5~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp`;
  const url = `https://api.day.app/2t4AZUoXXn9rqWirT54kQD/${text}?icon=${iconUrl}`;
  axios.get(url);
}

// sendMessage(`时间是 ${currentTime()}`);

function currentTime() {
  const pad = (value) => `0${value}`.slice(-2);
  const date = new Date();
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hour = pad(date.getHours());
  const min = pad(date.getMinutes());

  return `${year}-${month}-${day} ${hour}:${min}`;
}


function cacheJob() {
  const url = "https://www.v2ex.com/api/topics/show.json?node_id=43";
  axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      fs.writeFileSync("job.json", JSON.stringify(res.data, null, 2), "utf8");
      push();
    })
    .catch(console.log);
}

function push() {
  execSync('git add . && git commit -m "feat: auto" && git push -f');
}
