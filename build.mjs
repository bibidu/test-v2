import fs from "fs";
import axios from "axios";
import { execSync } from "child_process";

const url = "https://www.v2ex.com/api/topics/show.json?node_id=43";
// const url = "https://www.baidu.com";
axios
  .get(url)
  .then((res) => {
    console.log(res.data);
    fs.writeFileSync("job.json", JSON.stringify(res.data, null, 2), "utf8");
    push();
  })
  .catch(console.log);

function push() {
  execSync('git add . && git commit -m "feat: auto" && git push -f');
}
