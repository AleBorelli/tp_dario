const mongoose = require("mongoose");
const db = require('./env')

const pool = async () => {
   try {
      await mongoose.connect(db, {useNewUrlParser : true,/*  useCreateIndex: true */})
      console.log('Conectado a la BD')
   } catch (err) {
      console.error(err.message)
      process.exit(1)
   }
}

module.exports = pool