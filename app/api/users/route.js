import {connectToDB} from "../../../utils/database";
import User from '../../../models/user';

export const GET = async(req,{params}) =>{
    try{
      await connectToDB();
      const listUsers =  await User?.find({});
      return new Response(JSON.stringify(listUsers), {status:200})
    }catch(error){
      console.log("eeeeeeeeeeeeee api/users/route.js GET:" + error); 
      return new Response("Couldn't retreive users", {status:500});
    }
   }




   export const POST = async (request, { params }) => {
    const { email,name,image,coaching} = await request.json();

    try{
      await connectToDB();
      //check if a user already exists
      const userExists = await User.findOne({email:email});
  
      let user={};
      if(!userExists){
      console.log("aaaaaaaaaaaaaaaaa");
      user = new User({
        email:email,
        userName:"bbbbbbbbbb",
        name: name,
        image:image,
        coaching: coaching 
      });
      user.save();
    
     }
     return new Response(JSON.stringify(user), {status:200})
    }catch(error){
      return new Response("Couldn't create new user", {status:500});
    }
   }




   export const PATCH = async (request, { params }) => {
    const { email, coaching } = await request.json();
    try {
      await connectToDB();
      const requestedUser =  await User?.findOne({email});
      requestedUser.coaching = coaching;
      requestedUser.save();
      return new Response(JSON.stringify(requestedUser), {status:201});
    } catch (error) {
        return new Response("Error Updating coaching in user", { status: 500 });
    }
};