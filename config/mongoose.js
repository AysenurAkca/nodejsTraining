const mongoose = require('mongoose');

mongoose.connect(process.env.DBURI)
.then(()=> console.log('Connected the database'))
.catch(err => console.log('oh no connection error'))

