const mongoose = require('mongoose')

require('dotenv').config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(() => console.log('Database successfully connected'))
    .catch((e) =>{
        console.log(e.message);
        console.error(e.message);
        process.exit(1);
    })
}

module.exports = dbConnect;