const mongoose=require('mongoose');

const userSchema =new mongoose.Schema({
    fname:{
        type: String,
    },
    lname:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default:false
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }

    
});
module.exports= mongoose.model('User',userSchema);