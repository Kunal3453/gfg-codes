const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/MyDB", {
useNewUrlParser: true,
useUnifiedTopology: true
},(err)=>{
if(!err)
{
console.log("Connection Successful")
}
else
{
console.log("connection not OK")
}
})
const sch = {
name : String,
lname: String
};
const monmodel = mongoose.model("userdata", sch);
module.exports= monmodel;