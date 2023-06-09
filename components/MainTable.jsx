
'use client'
import TaskTable from './TaskTable';
import StageTable from './StageTable';
import {useState, useEffect} from 'react'
import {signOut, useSession} from "next-auth/react";
import Image from 'next/image';
import coaching  from '../utils/skeletonCoaching';
import { stringify } from 'querystring';
import { useRouter } from 'next/router';

import {auth} from '../app/firebase';
import {signInWithPopup, GoogleAuthProvider}  from "firebase/auth";
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

const MainTable = () => {

  const [inputTrainees, setInputTrainees] = useState([]);
  const [inputTrainees1, setInputTrainees1] = useState([]);
  const [inputTrainees2, setInputTrainees2] = useState([]);
  const [inputTrainees3, setInputTrainees3] = useState([]);
  const [inputTrainees4, setInputTrainees4] = useState([]);
  const [inputTrainees5, setInputTrainees5] = useState([]);
  const [inputTrainees6, setInputTrainees6] = useState([]);
  const [inputTrainees7, setInputTrainees7] = useState([]);
  const [inputTrainees8, setInputTrainees8] = useState([]);
  const [inputTrainees9, setInputTrainees9] = useState([]);
  const [inputTrainees10, setInputTrainees10] = useState([]);
  
  const updateInputTrainees = (stageNumber,val)=>{ 
    
    if(!val) return;  
    let arr = []; 
    val.map((v)=>{
      arr.push(v);
    })
     if(stageNumber===1) setInputTrainees1(arr); 
     else if(stageNumber===2)  setInputTrainees2(arr);
     else if(stageNumber===3)  setInputTrainees3(arr);
     else if(stageNumber===4)  setInputTrainees4(arr);
     else if(stageNumber===5)  setInputTrainees5(arr);
     else if(stageNumber===6)  setInputTrainees6(arr);
     else if(stageNumber===7)  setInputTrainees7(arr);
     else if(stageNumber===8)  setInputTrainees8(arr);
     else if(stageNumber===9)  setInputTrainees9(arr);
     else if(stageNumber===10)  setInputTrainees10(arr);       
  }




  const [loggedInSuccessful, setLoggedInSuccessful] = useState(false);
  const googleAuth = new GoogleAuthProvider();
  googleAuth.setCustomParameters({ prompt: 'select_account' });
   
  const login = async()=>{
    const result = await signInWithPopup(auth,googleAuth);
    window.localStorage.setItem("session", JSON.stringify(result));
    const email = result.user.email;
    const displayName= result.user.displayName; 
    const photoURL = result.user.photoURL;
    
    try{
      const response = await fetch('/api/users', 
      {method: 'POST',
       headers: {'Content-Type': 'application/json',}, 
       body:JSON.stringify({email:email, name:displayName, image: photoURL, coaching:coaching})
      });
      const data = await response.json();
      retreiveUsers();
      setTimeout(()=>{
        setLoggedInSuccessful(true);
      }, 1000);
      
    }catch(error){console.log("eeeeeeeeeee in login()=" + error);}
  }

  const logout = async()=>{
    window.localStorage.setItem("session", "{}");
    setLoggedInSuccessful(true);
    await signOut();
  }

  const [coach, setCoach] = useState({  
  });
  
  
 

 //Is the logged in user an admin?
 const [amIAdmin, setAmIAdmin] = useState(false);
//for traineee search box
 const [inputSearchTrainees, setInputSearchTrainees] = useState("");
 //for suggesting trainees by the user's search
 const [listSuggestedTraineees, setListSuggestedTrainees] = useState([]);
 const manipulateSuggestedTraineeList = (val="") =>{
   
    //setInputSearchTrainees(val);

    let retreivedSession = window.localStorage.getItem("session");
    const objSession = JSON.parse(retreivedSession);
    const emailSession = objSession?.user?.email;
    
    let filteredListTrainess = listTrainees.filter((trainee)=>trainee.email!=emailSession);
    if(val.length>0){
      filteredListTrainess = listTrainees.filter((trainee)=>trainee.name.toLowerCase().includes(val.toLowerCase()));
    }
   
    //setTrainees(filteredListTrainess);
    setListSuggestedTrainees(filteredListTrainess);
 }

 //when admin selects a trainee and wishes to enter his table
 const [selectedTrainee, setSelectedTrainee] =  useState("");
 const selTrainee =(email) =>{
  toggleTasks("-1");
  setSelectedTrainee(email);
 }

  //this implies if the skeleton has been retreived from  the db
  const [isSkeletonUpdated, setIsSkeletonUpdated] = useState(false);

  //for prevention of re-rendering when modifying a filed in a task
  const [indexRenderedTasks, setIndexRenderedTasks] = useState([]);
   
  //getting all the users who have logged in (at least once) to this app
  // and have been registered in collection 'users' in DB
  const [listTrainees, setListTrainees] = useState([]);

  const [firstEffectComplete, setFirstEffectComplete] = useState(false);
  const retreiveUsers = async() => {  
    try{
      const response = await fetch('/api/users', {method: 'GET'});
      const data = await response.json();
       setListTrainees(data);
       setFirstEffectComplete(true);
    }
     catch(error){ 
      console.log("eeeeeeeeee error in retreiveUsers():" + error);
     }
      finally{  }   
  } 
  useEffect(()=>{
    retreiveUsers();
   }, []); 



  //checking if the logged in user is an admin
  useEffect(()=>{  
    manipulateSuggestedTraineeList(); 
    let retreivedSession = window.localStorage.getItem("session");
    const objSession = JSON.parse(retreivedSession);
    const emailSession = objSession?.user?.email;
 
    listTrainees.map((item)=>{    
      //finding myseld on the list of users
      if(item.email === objSession?.user?.email){
        setAmIAdmin(item.isAdmin);
      }
      if((selectedTrainee!='' && item.email===selectedTrainee) || (selectedTrainee==='' && item.email === emailSession)){
                
        //update the skeleton with the updated data from DB
        coaching.chat=item.coaching.chat;
        coaching.stage1=item.coaching.stage1;  
        coaching.stage2=item.coaching.stage2;
        coaching.stage3=item.coaching.stage3;
        coaching.stage4=item.coaching.stage4;
        coaching.stage5=item.coaching.stage5;
        coaching.stage6=item.coaching.stage6;
        coaching.stage7=item.coaching.stage7;
        coaching.stage8=item.coaching.stage8;
        coaching.stage9=item.coaching.stage9;
        coaching.stage10=item.coaching.stage10;
        const temp = item.coaching;
        setCoach(temp);
      
        setIsSkeletonUpdated(true);
        localStorage.setItem("isSkeletonUpdated", true);
      }
    });
      
  }, [firstEffectComplete, selectedTrainee, loggedInSuccessful]); 




  //update the skeleton to DB
  const updateDB = async() =>{
    retreivedSession = window.localStorage.getItem("session");
    const objSession = JSON.parse(retreivedSession);

    try{
      const response = await fetch(`/api/users`, {
        method: 'PATCH',
        body: JSON.stringify({
          email: selectedTrainee!="" ? selectedTrainee : objSession.user.email,
          coaching
        })
      });
     
      if (response.ok) {
        console.log('Data updated successfully');
      } else {
        console.error('Error updating data:', response.status);
      }
    }
     catch(error){ 
      console.log("eeeeeeeeee error in updateDB():" + error);
     }
      
  }


  const [openedTask, setOpenedTask]  = useState('-1');
  const toggleTasks = (stageNumber) =>{
    setIndexRenderedTasks([]);
   //if this task is already opened
   if(openedTask===stageNumber){
    setOpenedTask('-1');
   }else{
    setOpenedTask(stageNumber);
   }
  }

  let retreivedSession;
  
  if (typeof window !== 'undefined') { 
    //It's a string   
   retreivedSession = window.localStorage.getItem("session");
   if(!retreivedSession || retreivedSession==='{}')  retreivedSession = "";
  }

  if(retreivedSession===""){     
    return  (<div>
   
      <button type="button" className="w-[64px] black_btn m-5" onClick={login}>Login</button> 
      <h1 className='font-extrabold text-3xl text-green-500 flex justify-center mt-20'>
      נא לוודא שביצעת כניסה. אם כן- מומלץ לרענן את הדף
    </h1>
      </div>) 
  }
 
  else if(!isSkeletonUpdated){ 
    if (typeof window !== 'undefined') { 
      window.localStorage.setItem("isSkeletonUpdated", false);
    }
    return (<h1 className='font-extrabold text-3xl text-cyan-500 flex justify-center mt-20'>
    אם בעוד מספר שניות לא יעלו הנתונים, מומלץ לרענן את הדף 
    </h1>)
  }
 

  let rs = window.localStorage.getItem("session");
  const objSession = JSON.parse(rs);
  const email =  objSession.user.email;
  
  //if I'm admin, I don't show my own table (I'm not a trainee)
  return (
  <div className='my-5 relative' dir="rtl">
     <button type="button" className="w-[64px] black_btn m-5" onClick={logout}>Logout</button>  
     {amIAdmin && 
        <div className='flex flex-col justify-center my-10'>
          <input type="text" 
           value={inputSearchTrainees}  
           onChange={(val) => { setInputSearchTrainees(val.target.value); manipulateSuggestedTraineeList(val.target.value)}}
           onKeyDown={(event)=>{
           if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
           event.preventDefault();
           }
           }} 
          placeholder='חיפוש מתאמנים' 
          className="border border-gray-300 rounded-md w-[50vw] m-auto p-2"
        />
        <div className='mt-5 mx-auto'>
          {listSuggestedTraineees.map((trainee,index)=>{   
            return (<p key={index} className="flex gap-3 max-h-[50px] overflow-auto" onClick={()=>{setInputSearchTrainees(trainee.name);  selTrainee(trainee.email); }}>
               <Image src={trainee.image} alt="Description of the image" width={32} height={32} className='border rounded-full ml-2'/>
              {trainee.name}
              </p>)
          })} 
        </div>  
      </div> 
     }
    
    {(!amIAdmin || (amIAdmin && selectedTrainee.length>0)) &&
          <div className="overflow-x-auto">   
          <StageTable stageNumber="1" amIAdmin={amIAdmin} toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}  coach={coach} updateInputTrainees={updateInputTrainees} inputTrainees={inputTrainees1} />
          {openedTask==='1' && <TaskTable stageNumber="1" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach} />}
           
          <StageTable stageNumber="2" amIAdmin={amIAdmin} toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach} updateInputTrainees={updateInputTrainees} inputTrainees={inputTrainees2}/>
          {openedTask==='2' && <TaskTable stageNumber="2" updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach} />}
           
          <StageTable stageNumber="3" amIAdmin={amIAdmin} toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach} updateInputTrainees={updateInputTrainees} inputTrainees={inputTrainees3} />
          {openedTask==='3' && <TaskTable stageNumber="3" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach} />}
          <StageTable stageNumber="4" toggleTasks={toggleTasks} amIAdmin={amIAdmin} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach} updateInputTrainees={updateInputTrainees} inputTrainees={inputTrainees4} />
          {openedTask==='4' && <TaskTable stageNumber="4" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach}  />}
          <StageTable stageNumber="5" toggleTasks={toggleTasks} amIAdmin={amIAdmin} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach} updateInputTrainees={updateInputTrainees} inputTrainees={inputTrainees5} />
          {openedTask==='5' && <TaskTable stageNumber="5" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach}   />}
          <StageTable stageNumber="6" amIAdmin={amIAdmin} toggleTasks={toggleTasks}  openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach} updateInputTrainees={updateInputTrainees} inputTrainees={inputTrainees6} />
          {openedTask==='6' && <TaskTable stageNumber="6" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach}   />}
          <StageTable stageNumber="7" amIAdmin={amIAdmin} toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach} updateInputTrainees={updateInputTrainees}  inputTrainees={inputTrainees7} />
          {openedTask==='7' && <TaskTable stageNumber="7" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach}  />}
          <StageTable stageNumber="8" amIAdmin={amIAdmin} toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach} updateInputTrainees={updateInputTrainees} inputTrainees={inputTrainees8} />
          {openedTask==='8' && <TaskTable stageNumber="8" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach}  />}
          <StageTable stageNumber="9" amIAdmin={amIAdmin} toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach} updateInputTrainees={updateInputTrainees} inputTrainees={inputTrainees9} />
          {openedTask==='9' && <TaskTable stageNumber="9" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach}  />}
          <StageTable stageNumber="10" amIAdmin={amIAdmin} toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach} updateInputTrainees={updateInputTrainees} inputTrainees={inputTrainees10}/>
          {openedTask==='10' && <TaskTable stageNumber="10" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={coach}  />} 
          
        </div>
    }


  </div>  
  )
}

export default MainTable