const express = require('express');
const cors = require('cors');


const port  = 2923;
const app = express()
app.use(cors());
const bodyParser = require('body-parser');
const { dataRouting } = require('./routing/dataRouting');

// const { connection } = require('./config/db');



app.use(bodyParser.json());
app.get('/', (request,response)=>{
    response.send('this is running')
})



app.use('/api',dataRouting)



app.listen(port, async()=>{

    try{
    //    await connection();
        console.log('port is running in 2926')
    }
    catch(err){
        console.log(`error :- ${err}`)
    }
})