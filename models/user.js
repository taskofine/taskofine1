import mongoose,{Schema, model,models} from "mongoose";

const UserSchema = new Schema({
  email:{type:String, unique:[true, 'Email already exists'], required:[true, 'Email is required']},
  userName:{
    type:String, 
    required:[true, 'Username is required'], 
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]     
  },
  name: {
   type:String,
  },
  image: {
    type:String,  
   },
   isAdmin: {
    type:Boolean,
    default:false
   },
   coaching: {
    type: mongoose.Schema.Types.Mixed,
    required: true
   } 
});

const User = models.User || model("User", UserSchema);
export default User;