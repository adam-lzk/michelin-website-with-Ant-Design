import { createRequire } from "module"
const require = createRequire(import.meta.url)
const http = require("http")

const host = 'localhost'
const port = 8080

const requestListener = (req, res) => {
  if (req.method === 'GET') {
    res.setHeader("Content-Type", "application/json")
    res.writeHead(200)
    res.end(`
      [
        {
          "id": "1",
          "name": "Restaurant 1",
          "address": "Address 1",
          "logo": "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/f23bb032d19c444cb062d0016d2525c2",
          "rating": 4
        },
        {
          "id": "2",
          "name": "Restaurant 2",
          "address": "Address 2",
          "logo": "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/502c3efff32b4beba04c7b2b7bdc324c",
          "rating": 5
        }
      ]
    `)
  }
}

const server = http.createServer(requestListener)

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
