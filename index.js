const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ extended: true }))

const routes = require('./src/routes')
app.use(routes)

// app.get('/', (request, response) => {
//   response.json({
//     status: 200,
//     response: '<h1> Hello World! </h1>',
//   })
// })

app.listen(3000, () => console.log('API OK') )
