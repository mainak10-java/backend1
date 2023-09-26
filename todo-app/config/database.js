const mongoose = require('mongoose')

require('dotenv').config();  // This ensures that whatever data is loaded in the .env file is fitted in the process obj

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(() => console.log('Success'))
    .catch((e) => {
        console.error(e.message)
        process.exit(1)
    });
}

module.exports= dbConnect;