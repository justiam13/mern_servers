const express=require('express')
const router=express.Router()
const Author=require('../model/authorSchema')


router.post('/',(req,res)=> {
    try{
    
        const {_id,aname,age,totalbooks,description} = req.body;
        const newAuthor= new Author(
            {_id,aname,age,totalbooks,description});
            newAuthor.save();
            res.status(201).send(
                {message:"Author Created",newAuthor})
    
    }catch(err){
        res.status(500).send({message:err})
    
    }
    })
router.get('/',async (req,res)=>{
try{
    const data = await Author.find();
    res.status(201).send(data)
    }catch(err){
        res.status(500).send({message:err})
        }
    })
module.exports =router