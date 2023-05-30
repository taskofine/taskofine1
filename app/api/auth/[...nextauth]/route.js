import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from "../../../../utils/database" ;
import User from "../../../../models/user";
import coaching from '../../../../utils/skeletonCoaching';


const handler = NextAuth({
    providers: [
       GoogleProvider({
         clientId: process.env.GOOGLE_ID ,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
       }) 
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
      async session({session}) {
      try{
        const sessionUser = await User.findOne({email: session.user.email});
        session.user.id = sessionUser._id.toString();
        return session;  
      }catch(error){
        console.log("eeeeeeeeeeeeee=" + error);
      }
    },
    async signIn({profile}){ 
     try{
       
       await connectToDB();
     
       //check if a user already exists
       const userExists = await User.findOne({email:profile.email});
       
       //if no user exists, create one
       if(!userExists && profile){
        const user = new User({
          email:"aaaaaaaaaaa",
          userName:"bbbbbbbbbb",
          name: "cccccccccccccc",
          image:"https://lh3.googleusercontent.com/a/AAcHTtcGeePOHSkdTsyI77BfBwnkg3UsCjoS3airSmZ4=s96-c",
          coaching: {} 
        });
        user.save();
        /*const user = await User.create({
          email:profile?.email,
          userName:profile?.name.replace(" ", "").toLowerCase(),
          name: profile?.name,
          image:profile?.picture,
          coaching 
        });*/
        
       }

       return true;
     }catch(error){
       console.log("eeeeeeeeeeeeeeee=" + error);
       return false;
      }
     }
    },

});

export {handler as GET, handler as POST};