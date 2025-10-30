import mongoose from "mongoose";
const userShema = new mongoose.Schema({
    "name" :{
            type: String,
            required : [true, 'el nombre es obligatorio']
            },

    "last name":{
            type: String,
            required : [true, 'el apellido es obligatorio']
               },
    
    "email":{
            type: String,
            required : [ true, 'el email es obligatorio']
            },

    "password":{
            type: String,
            require : [true, 'password es obligatorio']
               },

    "role": {
            type: String,
            enum: ['user', "admin"],
            default: 'user'
            }

});