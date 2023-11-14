import http from 'http'
import cardsData from './data.json' assert {type: 'json'};

const port = 8080

http.createServer((req, res) => {
  //console.log({ headers: req.headers, method: req.method })

  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET")
  res.setHeader("Access-Control-Max-Age", 2592000)  // 30 days
  res.setHeader('Access-Control-Allow-Headers', '*')

  if (req.method === "OPTIONS") {
    res.writeHead(200)
    res.end()
    return
  }

  console.log({ url: req.url })
  console.log({ pathname: new URL(req.url, `http://${req.headers.host}`).pathname })
  // to check - curl "http://localhost:8080/restaurants?page=1&per_page=10"

  if (new URL(req.url, `http://${req.headers.host}`).pathname === "/restaurants") {
    res.setHeader("Content-Type", "application/json")
    res.writeHead(200)
    res.end(JSON.stringify(cardsData))
  }
  else {
    res.setHeader("Content-Type", "text/html")
    res.writeHead(404)
    res.end("Not found")
  }
})
.listen(port)
