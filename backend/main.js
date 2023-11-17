import http from 'http'
import restaurants from './data.json' assert {type: 'json'};

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

  const newURL = new URL(req.url, `http://${req.headers.host}`)
  //console.log({ url: req.url })
  //console.log({ pathname: newURL.pathname })
  //console.log({ 'newURL': newURL })
  // to check - curl "http://localhost:8080/restaurants?page=1&per_page=10"

  //console.log({ 'searchParams': newURL.searchParams })
  //console.log({ 'searchParams.get(key)': newURL.searchParams.get('id') })

  if (newURL.pathname === "/restaurants") {
    const id = newURL.searchParams.get('id')

    if (id) {
      const requiredRestaurant = restaurants.find(card => card.id.toString() === id)

      if (requiredRestaurant) {
        //console.log({ requiredRestaurantID: requiredRestaurant.id })
        res.setHeader("Content-Type", "application/json")
        res.writeHead(200)
        res.end(JSON.stringify([requiredRestaurant]))
      }
      else {
        res.setHeader("Content-Type", "text/html")
        res.writeHead(404)
        res.end("Not found")
      }
    }
    else {
      res.setHeader("Content-Type", "application/json")
      res.writeHead(200)
      res.end(JSON.stringify(restaurants))
    }  // to check - curl "http://localhost:8080/restaurants?id=4"
  }
  else {
    res.setHeader("Content-Type", "text/html")
    res.writeHead(404)
    res.end("Not found")
  }
})
.listen(port)
