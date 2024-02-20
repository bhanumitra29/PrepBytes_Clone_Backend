const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { regSh } = require('../model/registerSchema');
const { dataStore } = require('../model/dataStore');
const { htmlsuccesspage } = require('./htmlsuccesspage');
const secret_key = "bhanu";
const saltround=10;
const stripe=require("stripe")("sk_test_51OMERySJb30zHYKXRtntVAOMPx8ClokJnGOlIPN1IBbaP06OUAf0e4jFlBPAnUsEPy6uK7zORnT48RFKNRH14DC2002ZAtE6HX")
let courseUser = "";
let itemStore=" ";


const register = async(req, res) => {
    const data = req.body;
    // console.log(data)
    try {
    const existingUser = await regSh.findOne({email:{$eq:data.email}});
    if (existingUser) {
        return res.send({ msg: 'User already registered' });
    }
    else{
    data.password = bcrypt.hashSync(data.password, 10);
    console.log(data.password)
    const regDB= await regSh.create(data)
    console.log(regDB)
    const token = jwt.sign({ user:data.email }, secret_key, { expiresIn: '1d' });
    console.log('token:', token);
    return res.send({ msg: 'User Registered successfully', token: token });
}
    }
    catch(err){
        console.log(err)
    }
}

const login = async(req, res) => {
    const logindata = await req.body;
    // console.log(logindata,"-----------")
    try{

    const userDetails = await regSh.findOne({email:{$eq:logindata.email}});
    // console.log(userDetails,"111111111------")
    if (userDetails) {
        // res.status(404).send({ msg: 'User not found' });
        courseUser=logindata.email
        console.log(courseUser)

    const validate = bcrypt.compareSync(logindata.password,userDetails.password);
    
    if (validate) {
        // courseUser = logindata.email

        const token = jwt.sign({ useremail: logindata.email }, secret_key, { expiresIn: '1d' });
        console.log(token,"22222222222222",userDetails);
        return res.send({ msg: 'User login successfully', token: token, userdetail:userDetails });
    } else {
        return res.send({ msg: 'Invalid credentials' });
    }

}
else{
    return res.send({msg:"user not registered/ invalid Email"})
}

    }

    catch(error){
        return res.send({msg:error})
    } 
};


const userauth = async (req, res) => {
    const user = await req.user;
    // console.log(user,"--------------");
    if (user && user.useremail) {
        try {
            const userinfo = await regSh.findOne({ email: user.useremail });
            // console.log(userinfo, "++++++++++++++++")
            if (userinfo) {
                res.send({ msg: "User Authorized", userdata: userinfo })
            }
            else {
                res.status(404).send("User not found");
            }
        }
        catch (err) {
            console.log("Error fetching user detail from db:", err);
        }
    }
    console.log("user authorized!");
}

const createcheckout1 = async (req, res) => {

    
    
    const { products } = await req.body;
    console.log(products);

    const storeitem=products.map((prod1)=>({
        email:prod1.useremail,
        id:prod1.id,
        image:prod1.image,
        name:prod1.name,
        date:prod1.date,
        price:prod1.price,
        duration:prod1.duration,
        cat:prod1.cat

}))
const dataSt=await dataStore.create(storeitem[0])
 console.log(dataSt)

  
    const lineItems = products.map((prod) => ({
      
      price_data: {
        currency: "inr",
        product_data: {
          name: prod.name,
        },
        unit_amount: prod.price,
      },
      quantity: 1,
    }));
  
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:2923/user/Success",
        // success_url: res.send({ msg: 'Payment Successful'}),
        cancel_url: "http://localhost:2923/user/Cancel",
        // cancel_url: res.send({ msg: 'Payment Failed'}),
      });
  
      res.json({ id: session.id });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
  };

  const courses =  async (req, res) => {
    for(let i=0;i<pastmock.length;i++){
        let rt=await str.create(pastmock[i])

    }
    return res.send("successfully stored")


  }

//   const fullData =  async (req, res) => {

//   }


  const Success = async(req, res) => {
    const rslt = await dataStore.create(itemStore[0])
    console.log(rslt)
    return res.send(htmlsuccesspage)
}

const Cancel = (req, res) => {
    return res.send({msg:"cancel"})
}

const purchased =  async (req, res) => {

    const paidCources = await dataStore.find({email:{$eq:courseUser}})
    return res.send(paidCources)
}
 

module.exports = {register,login,userauth,createcheckout1,Success,Cancel,purchased}