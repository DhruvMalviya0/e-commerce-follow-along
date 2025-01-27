const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        
    },

    email: {
        type: String,
        required: [true, "Please enter your email"],
        
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minlength: [4, "Password should be greater than 4 characters"],
        select: false,
    },
    phoneNumber: {
        type: Number,
    
    },
    addresses: [
        {
            country:{
                type: String,
                
            },
            city:{
                type: String,
                
            },
            address1:{
                type: String,
                
            },
            address2:{
                type: String,
                
            },
            zipCode:{
                type: Number,
                
            },
            adressTYPE:{
                type: String,
                
            },

        }
    ],
    role:{
        type:String,
    },
    avatar:{
        public_id:{
            type: String,
            required: true,
            
        },
        url:{
            type: String,
            required: true,
            
        },
    },
    creareAt:{
        type: Date,
        default: Date.now(),
    },
    resetPasswordToken: String,
    resetPasswordTime: Date,

});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.getJwtToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME,
    });
};

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);