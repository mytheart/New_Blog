const express = require("express")

const app = express()

app.set('secret', 'i2u34y12oi3u4y8')

app.use(require('cors')())
app.use(express.json())


app.use(express.static(__dirname + '/dist'))
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(80, () => {
  console.log('server running in localhost:80');
});