'use client'
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {signIn,signOut,useSession, getProviders} from 'next-auth/react';
import {coaching}  from '../utils/skeletonCoaching';

const Nav = () => {

  const {data: session} = useSession();

  const updateDB = async() =>{
  
   coaching.stage1.status="חדש";

    try{
      const response = await fetch(`/api/users`, {
        method: 'PATCH',
        body: JSON.stringify({
          email: session?.user?.email,
          coaching
        })
      });
     
      if (response.ok) {
        console.log('Data updated successfully');
        // Handle successful response
      } else {
        console.error('Error updating data:', response.status);
        // Handle error response
      }

    }
     catch(error){ 
      console.log("eeeeeeeeee error in retreiveUsers():" + error);
     }
      finally{  console.log("hhhhhhhhhhhhhh");} 
  }


  

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(()=>{
   const setProvs = async ()=>{
    const response = await getProviders();
    setProviders(response);
   }
   setProvs(); 
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      {/*<Link href="/" className='flex gap-2 flex-center'> */}
        <Image onClick={updateDB} src="/assets/icons/logo.png" width={96} height={96} alt="Taskofine" className='object-contain'></Image>
        <p className='logo_text'>אלחי פין יעוץ ולווי עסקי</p>
      {/*</Link>*/}
      
       {/* Desktop Navigation  */}
       <div className='sm:flex hidden'>
         {session?.user ? 
         (
          <div className='flex gap-3 md:gap-5'>
            <button type="button" onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <div className='flex'>
              <Image src={session?.user.image} width={37} height={37} alt="profile" className='rounded-full'  onClick={()=>{setToggleDropdown((prev)=>!prev)}}></Image>
            </div>
     
          </div> 
         ) :
         <>
         {providers && Object.values(providers).map((provider)=>(
           <button type="button" key={provider.name}  className='black_btn' onClick={() => {signIn(provider.id); }}>
             Sign In
           </button>
           
         )
         )}
         </>
        }
       </div>

       {/* Mobile Navigation  */}
       <div className='flex sm:hidden relative'>
         {session?.user? 
          (<div className='flex'>
             <Image src={session?.user.image} width={37} height={37} alt="profile" className='rounded-full' onClick={()=>{setToggleDropdown((prev)=>(!prev))}}/>
           
              {toggleDropdown && (
               <div className='dropdown'>
                 <button type="button" className="w-full black_btn" 
                  onClick={()=>{setToggleDropdown(false);
                            signOut();}}>
                  Sign Out   
                 </button>  
               </div>
              )}

           </div>) 
          : 
          (<>
             {providers && Object.values(providers).map((provider)=>(
              <button type="button" key={provider.name}  onClick={()=>{signIn(provider.id)}} className='black_btn'>
                Sign In
              </button>
               )
            )}
           </>)}
       </div>

    </nav>
  )
}

export default Nav