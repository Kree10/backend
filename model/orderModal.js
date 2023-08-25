const mongoose= require('mongoose')

const orderSchema =new mongoose.Schema({

    orderNumber:{
        type: String,
        default: Math.floor(Math.random() * 10000000)
    },

    cart: [
        {
            productName:{
                type: String,
            },
            productPrice:{
                type: Number,
            },
            productCategory:{
                type: String,
            },
            productQuantity:{
                type: Number,
            },
            productImage:{
                type: String,
            }
        }
    ],
    totalAmount:{
        type: Number,
    },
    shippingAddress:{
        type: String,
    },
    status:{
        type: String,
        default:"Pending",
    },
    orderedDate:{
        type: Date,
        default: Date.now
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

})

module.exports=mongoose.model("OrderModal",orderSchema)