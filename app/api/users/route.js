import {connectToDB} from "../../../utils/database";
import User from '../../../models/user';

export const GET = async(req,{params}) =>{
    try{
      await connectToDB();
      const listUsers =  await User?.find({});
      return new Response(JSON.stringify(listUsers), {status:200})
    }catch(error){
      console.log("eeeeeeeeeeeeee api/users/route.js:" + error); 
      return new Response("Couldn't retreive users", {status:500});
    }
   }