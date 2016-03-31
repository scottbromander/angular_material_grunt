var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Animal = new Schema({
    name: { type : String , required : true },
    age: { type : String , required : true },
    type: { type : String , required : true },
    details: { type : String , required : true },
    imageurl: { type : String , required : true },
    datecreated: { type : Date , default : Date.now }
});

module.exports = mongoose.model("Animal", Animal);
