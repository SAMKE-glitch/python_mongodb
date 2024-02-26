// creating the schema
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    DoB: {type:String, required:true},
    idNumber: {type:Number, required:true},
    taxNumber: {type:String, required:true}
});

module.export = mongoose.model('User', userSchema);