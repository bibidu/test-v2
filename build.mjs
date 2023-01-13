import fs from "fs";
import axios from "axios";
import { execSync } from "child_process";

const url = "https://v2ex.com/api/topics/hot.json";
// const url = "https://www.baidu.com";
axios
  .get(url)
  .then((res) => {
    console.log(res.data);
    fs.writeFileSync("hot.json", JSON.stringify(res.data, null, 2), "utf8");
    push();
  })
  .catch(console.log);

function push() {
  execSync('git add . && git commit -m "feat: auto" && git push -f');
}
