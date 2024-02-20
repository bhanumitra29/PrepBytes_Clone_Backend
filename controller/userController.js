
const { authh } = require("../authFolder/auth");
const { register, login, userauth, createcheckout1, Success, Cancel, purchased } = require("../router/logincontroller");


const userRouter = require("express").Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/auth", authh, userauth );
userRouter.post("/createcheckout1",createcheckout1);
userRouter.get("/Success", Success)
userRouter.get("/Cancel",Cancel)

userRouter.get('/paid',purchased)
module.exports = {userRouter}