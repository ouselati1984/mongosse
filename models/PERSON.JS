const mongoose=require('mongoose')
const schema=mongoose.Schema;
const PERSONSchema= new schema({
    name:{
        type:String,
       
  
    },
    age:{
        type:Number,
       
    },
    favoriteFoods:{
        type:[String],
        
    }
})

module.exports= PERSON= mongoose.model('person',PERSONSchema)