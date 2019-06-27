module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect('mongodb://127.0.0.1:27017/My_blog', {
    useNewUrlParser: true,
    useFindAndModify:false
  }).then(()=>{
    console.log('mongodb connected')  
  })

  require('require-all')(__dirname + '/../models')
}