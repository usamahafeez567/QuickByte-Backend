import User from "../model/userAuth.js"
import bcrypt from "bcryptjs"


export const signUp=async(req,res)=>{
   
    
    try{
        const {name,email,password,confirmPassword}=req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "User already exists" });
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const hashedconfirmPassword = await bcrypt.hash(confirmPassword, salt);
  
        const user=new User({
            name,email,password:hashedPassword,confirmPassword:hashedconfirmPassword,
        });
        await user.save();
        res.status(201).json({ message: "User created successfully" });
    }catch (error) {
        res.status(500).json({ message: error.message });
      }

};







export const signIn = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // Check if password is correct
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // Generate token
      // const token = jwt.sign({ id: user._id }, "mysecretkey");
  
      // res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  