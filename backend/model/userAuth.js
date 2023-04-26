import mongoose from "mongoose";

// define schema
const userSchema = new mongoose.Schema({
    name :{type:String, required:true, unique:true},
    email : { type : String, required: true, unique: true },
    password : { type : String, required: true, minlength: 8 },
    confirmPassword: {
        type: String,
        required: true,
        minlength: 8 ,
        validate: {
          validator: function (value) {
            return value === password;
          },
          message: 'Passwords do not match'
        }
      }
});

// define user  model
const User = mongoose.model("User", userSchema);
export default User;