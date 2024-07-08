const mongoose=require('mongoose')
const book ={
    bid:{
        type:String,
        required:true

    },
    name:{
        type:String,
        required:true,
    },publisher:{
        type:String,
        required:true,

    },description:{
        type:String,
        required:true,
    },
    _id:{
        type:String,
        required:true,
    }
}
const bookSchema =new mongoose.Schema(book)
module.exports=mongoose.model('Books',bookSchema)