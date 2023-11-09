import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const server = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const host = 'localhost'
const port = 8080
const endpoint = '/restaurants'

server.get(endpoint, (req, res) => {
  res.sendFile(__dirname + "/data.json")
})

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}${endpoint}`)
})
