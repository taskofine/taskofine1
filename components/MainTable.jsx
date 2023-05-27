
'use client'
import TaskTable from './TaskTable';
import StageTable from './StageTable';
import {useState, useEffect} from 'react'
import {useSession} from "next-auth/react";
import coaching  from '../utils/skeletonCoaching';



const MainTable = () => {

  let amIAdmin = false;
  const {data: session} = useSession();

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
         
        amIAdmin = item.isAdmin;
        //update the skeleton with the updated data from DB
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
        setIsSkeletonUpdated(true);
        }
      }); 
  }, [firstEffectComplete]); 




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
    return (<h1 className='font-extrabold text-3xl text-cyan-500 flex justify-center mt-20'>
    אם בעוד מספר שניות לא יעלו הנתונים, מומלץ לרענן את הדף 
    </h1>)
  }

  return (
    (<div className='my-5 relative' dir="rtl">
    <div className="overflow-x-auto">    
      <StageTable stageNumber="1" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>
      {openedTask==='1' && <TaskTable stageNumber="1" updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} />}
      <StageTable stageNumber="2" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>
      {openedTask==='2' && <TaskTable stageNumber="2" updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>}
      <StageTable stageNumber="3" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>
      {openedTask==='3' && <TaskTable stageNumber="3" updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>}
      <StageTable stageNumber="4" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>
      {openedTask==='4' && <TaskTable stageNumber="4" updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>}
      <StageTable stageNumber="5" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>
      {openedTask==='5' && <TaskTable stageNumber="5" updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>}
      <StageTable stageNumber="6" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>
      {openedTask==='6' && <TaskTable stageNumber="6" updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>}
      <StageTable stageNumber="7" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>
      {openedTask==='7' && <TaskTable stageNumber="7" updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>}
      <StageTable stageNumber="8" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>
      {openedTask==='8' && <TaskTable stageNumber="8" updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>}
      <StageTable stageNumber="9" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>
      {openedTask==='9' && <TaskTable stageNumber="9" updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>}
      <StageTable stageNumber="10" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>
      {openedTask==='10' && <TaskTable stageNumber="10" updateDB={updateDB} listTrainees={listTrainees} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated}/>} 
  
    </div>
  </div>)  
  )
}

export default MainTable
