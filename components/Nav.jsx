'use client'
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {signIn,signOut,useSession, getProviders} from 'next-auth/react';
import coaching  from '../utils/skeletonCoaching';

const Nav = () => {

  const {data: session} = useSession();




  

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
      <Link href="/" className='flex gap-2 flex-center'> 
        <Image src="/assets/icons/logo.png" width={96} height={96} alt="Taskofine" className='object-contain'></Image>
        <p className='logo_text'>אלחי פין יעוץ ולווי עסקי</p>
      </Link>
      
       {/* Desktop Navigation  */}
       <div className='sm:flex hidden'>
         {session?.user ? 
         (
          <div className='flex gap-3 md:gap-5'>
          
            <div className='flex'>
              <Image src={session?.user.image} width={37} height={37} alt="profile" className='rounded-full'  onClick={()=>{setToggleDropdown((prev)=>!prev)}}></Image>
            </div>
     
          </div> 
         ) :
         <>
         
         </>
        }
       </div>

       {/* Mobile Navigation  */}
       <div className='flex sm:hidden relative'>
         {session?.user? 
          (<></>) 
          : 
          (<>
           
           </>)}
       </div>

    </nav>
  )
}

export default Nav