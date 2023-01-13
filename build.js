console.log(1234)

fetch('https://www.v2ex.com/api/nodes/list.json?fields=name,title,topics,aliases&sort_by=topics&reverse=1').then(res => {
  if (res.ok) {
    return res.json()
  }
}).then(console.log)
