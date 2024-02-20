const { mockTests, practiceTests } = require("../dummyData")

const mockTestsController= (req,res)=>{
    return res.send(mockTests)
}

// const practiceTestsController = (req,res)=>{
//     return res.send(practiceTests)
// }

module.exports = {mockTestsController}