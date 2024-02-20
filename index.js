const express = require('express');
const cors = require('cors');

const stripe = require("stripe")("sk_test_51OMERySJb30zHYKXRtntVAOMPx8ClokJnGOlIPN1IBbaP06OUAf0e4jFlBPAnUsEPy6uK7zORnT48RFKNRH14DC2002ZAtE6HX")
const port  = 2923;
const app = express()
app.use(cors());
const bodyParser = require('body-parser');
const { dataRouting } = require('./routing/dataRouting');
const { connection } = require('./config/db');
const { userRouter } = require('./controller/userController');




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(bodyParser.json());
app.get('/', (request,response)=>{
    response.send('this is running')
})



app.use('/api',dataRouting)
app.use('/user',userRouter)



app.listen(port, async()=>{

    try{
       await connection();
        console.log('port is running in 2923')
    }
    catch(err){
        console.log(`error :- ${err}`)
    }
})