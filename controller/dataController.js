const { mockTests } = require("../dummyData")

const mockTestsController= (req,res)=>{
    return res.send(mockTests)
}

module.exports = {mockTestsController}