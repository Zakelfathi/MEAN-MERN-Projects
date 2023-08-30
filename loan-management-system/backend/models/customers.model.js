const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    dob:String
});
const customerModel= mongoose.model('Customer',customerSchema);
module.exports=customerModel;