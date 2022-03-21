const express = require('express')
const app = express()
const path = require('path')
const PORT = 3030

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.listen(PORT, () =>
  console.log(`
Servidor abierto en ${PORT}
http://localhost:${PORT}
`),
)
