import mongoose from "mongoose";

export const connect=()=>{

//const mongoUrl="mongodb://localhost:27017/Quickbyteproject";

mongoose.connect("mongodb://0.0.0.0:27017/Quickbyteproject",{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(`${err}`)
})

}