const { response } = require('express');
const express = require ('express')
const router = express.Router();
const userDetailsModel = require('../MODELS/userdetails')

 router.put('/:id', async(req,res)=>{
    var id = req.params.id 
    var data2 ={
        name:req.body.name,
        email:req.body.email,
        place:req.body.place

    }
    await userDetailsModel.findByIdAndUpdate(id,data2,(err,docs)=>{
        if(!err){
          res.json('update successfully...')
        }else{
            res.json ('failed to update')
        }
    })
 })
 router.delete("/:id",async(req,res)=>{
    var id = req.params.id 
    var data = await userDetailsModel.findByIdAndDelete(id)
    res.json(data)
 })
 router.get("/",async(req,res)=>{ 
    var data = await userDetailsModel.find()
    res.json(data)
 })
 router.get("/:id",async(req,res)=>{
    var id = req.params.id 
    var data = await userDetailsModel.findById(id)
    res.json(data)
 })
 
 router.post('/',(req,res)=>{
    var data={
        name:req.body.name,
        email:req.body.email,
        place:req.body.place

    }
    var data1 =new userDetailsModel(data)
    data1.save().then(response=>{
        res.json(data1)
    }).catch(err=>{
        if(err){
            console.log('error',err)
        }
    })
 })
 module.exports = router