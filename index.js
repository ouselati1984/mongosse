
const express=require('express')
const app=express()
const port=4000
const mongoose=require('mongoose')
const connectDB=require('./config/connectDB')
const PERSON = require('./models/PERSON')
connectDB()

//
//CREATE 
 const person = new PERSON ({
    name:'ahmed',
age:37,
favoriteFoods:['KOSKOUS','CHAPPATI']

 })

 person.save(()=>{
    try {
       console.log('the user has been added');
    } catch (error) {
        console.log(error);
     }
 })
// prepare array of person
 const people=[
    {
        name:'Chedly',
    age:34,
    favoriteFoods:['MLOUKHIYA','CHAPPATI']
    
     },
     {
        name:'Houssem',
    age:20,
    favoriteFoods:['POISSON','MLAWI']
    
     },
     {
        name:'Rihab',
    age:27,
    favoriteFoods:['PIZZA','CORDON-BLEU']
    
     }

 ]
 function addarray_people(people)
 {

   for (let i=0;i<people.length;i++)
   {
    const person = new PERSON (
       people[i]
      
    )
    person.save(()=>{
        try {
           console.log('the user has been added');
        } catch (error) {
            console.log(error);
         }
     })
   }

 }
 addarray_people(people)


 //find 

 PERSON.find({name:'Rihab'},(err,data)=>{
    try {
       console.log(data);
    } catch (error) {
        console.log(error);
     }
 })

 PERSON.findOne({name:'Houssem'},(err,data)=>{
    try {
       console.log(data);
    } catch (error) {
        console.log(error);
     }
 })

//find by id DB
PERSON.findById("6151bbd8c4d9e8a9b1d1dfc8",(error,data)=>{
    try {
        console.log('the user has been found');
    } catch (error) {
        console.log(error);
    }
})

//found and update age 

PERSON.findOneAndUpdate({name:'Rihab'},{age:29} ,(err,data)=>{
    try {
        console.log(data, person);
    } catch (error) {
        console.log(error);
    }
})


////delete
person.delete("6151f401865333c02b7b0276",(error,data)=>{
    try {
        console.log('the user has been deleted');
    } catch (error) {
        console.log(error);
    }
})

//remove
person.remove({name:'ahmed'},(error,data)=>{
    try {
        console.log('all users are deleted');
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, err=>{
    err? console.log(err): console.log(`the server is runnig on ${port}`)
})
