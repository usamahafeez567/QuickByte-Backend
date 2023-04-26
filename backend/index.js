import express from "express";
import { connect } from "./db/connect.js";
import router from "./routes/userAuth.js";
import cors from "cors"

const app=express();
connect();


app.use(express.json())

app.use("/api/userAuth/register",router);

app.listen(5000,()=>{
    console.log("sever started");
})
app.use(cors());

// app.post("/post" ,async (req, res) => {
//         console.log(req.body);
//         const {data}=req.body;

//         if(data=="subhan"){
//             res.send({status:"ok"})
//         }
//     })