
'use client'
import TaskTable from './TaskTable';
import StageTable from './StageTable';
import {useState, useEffect} from 'react'
import {useSession} from "next-auth/react";
import Image from 'next/image';
import coaching  from '../utils/skeletonCoaching';
import { stringify } from 'querystring';
import { useRouter } from 'next/router';


const MainTable = () => {

  const [lior, setLior] = useState({  
  });
  
  const {data: session} = useSession();
 

 //Is the logged in user an admin?
 const [amIAdmin, setAmIAdmin] = useState(false);
//for traineee search box
 const [inputSearchTrainees, setInputSearchTrainees] = useState("");
 //for suggesting trainees by the user's search
 const [listSuggestedTraineees, setListSuggestedTrainees] = useState([]);
 const manipulateSuggestedTraineeList = (val) =>{
    setInputSearchTrainees(val);
    
    const filteredListTrainess = listTrainees.filter((trainee)=>trainee.name.toLowerCase().includes(val.toLowerCase()));
    //setTrainees(filteredListTrainess);
    setListSuggestedTrainees(filteredListTrainess);
 }

 //when admin selects a trainee and wishes to enter his table
 const [selectedTrainee, setSelectedTrainee] =  useState("");
 const selTrainee =(email) =>{
  
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
    if(session){
      window.localStorage.setItem("session", JSON.stringify(session));  
    }
    const RetreivedSession = window.localStorage.getItem("session");
    const objSession = JSON.parse(RetreivedSession);
    const emailSession = objSession?.user?.email;

    listTrainees.map((item)=>{  
      //finding myseld on the list of users
      if(item.email === session?.user?.email || item.email===emailSession){
        setAmIAdmin(item.isAdmin);
      }
      
      if(item.email === session?.user?.email || item.email===emailSession || (selectedTrainee!='' && item.email===selectedTrainee)){
        console.log("aaaaaaaaaaaaaaaa=" + item.coaching.chat);
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

        setLior(temp);
      
        setIsSkeletonUpdated(true);
        localStorage.setItem("isSkeletonUpdated", true);
        }
      }); 
  }, [firstEffectComplete, selectedTrainee]); 




  //update the skeleton to DB
  const updateDB = async() =>{
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

  if(!session){
    return (<h1 className='font-extrabold text-3xl text-green-500 flex justify-center mt-20'>
      נא לוודא שביצעת כניסה. אם כן- מומלץ לרענן את הדף
    </h1>)
  }

  else if(!isSkeletonUpdated){
    localStorage.setItem("isSkeletonUpdated", false);
    return (<h1 className='font-extrabold text-3xl text-cyan-500 flex justify-center mt-20'>
    אם בעוד מספר שניות לא יעלו הנתונים, מומלץ לרענן את הדף 
    </h1>)
  }
 


  
//if I'm not admin
  return (
  <div className='my-5 relative' dir="rtl">

    <div className='flex flex-col justify-center my-10'>
      <input type="text" 
       value={inputSearchTrainees}  
       onChange={(val) => manipulateSuggestedTraineeList(val.target.value)}
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
          return (<p key={index} className="flex gap-3" onClick={()=>{selTrainee(trainee.email); }}>
             <Image src={trainee.image} alt="Description of the image" width={32} height={32} className='border rounded-full ml-2'/>
            {trainee.name}
            </p>)
        })} 
      </div>  
    </div>

    <div className="overflow-x-auto">   
      <StageTable stageNumber="1" amIAdmin={amIAdmin} toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}  coach={lior}/>
      {openedTask==='1' && <TaskTable stageNumber="1" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior} />}
     
      <StageTable stageNumber="2" amIAdmin={amIAdmin} toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>
      {openedTask==='2' && <TaskTable stageNumber="2" updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>}
       
      <StageTable stageNumber="3" amIAdmin={amIAdmin} toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>
      {openedTask==='3' && <TaskTable stageNumber="3" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>}
      <StageTable stageNumber="4" toggleTasks={toggleTasks} amIAdmin={amIAdmin} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>
      {openedTask==='4' && <TaskTable stageNumber="4" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>}
      <StageTable stageNumber="5" toggleTasks={toggleTasks} amIAdmin={amIAdmin} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>
      {openedTask==='5' && <TaskTable stageNumber="5" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>}
      <StageTable stageNumber="6" amIAdmin={amIAdmin} toggleTasks={toggleTasks}  openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>
      {openedTask==='6' && <TaskTable stageNumber="6" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>}
      <StageTable stageNumber="7" amIAdmin={amIAdmin} toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>
      {openedTask==='7' && <TaskTable stageNumber="7" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>}
      <StageTable stageNumber="8" amIAdmin={amIAdmin} toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>
      {openedTask==='8' && <TaskTable stageNumber="8" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>}
      <StageTable stageNumber="9" amIAdmin={amIAdmin} toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>
      {openedTask==='9' && <TaskTable stageNumber="9" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>}
      <StageTable stageNumber="10" amIAdmin={amIAdmin} toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>
      {openedTask==='10' && <TaskTable stageNumber="10" amIAdmin={amIAdmin} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} coach={lior}/>} 
      
    </div>

  </div>  
  )
}

export default MainTable
