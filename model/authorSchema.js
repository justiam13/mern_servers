const mongoose=require('mongoose')
const authors ={
    _id:{
        type:String,
        required:true

    },
    aname:{
        type:String,
        required:true,
    },age:{
        type:String,
        required:true,

    },totalbooks:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
}
const authorSchema =new mongoose.Schema(authors)
module.exports=mongoose.model('Authors',authorSchema)