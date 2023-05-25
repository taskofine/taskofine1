
'use client'
import TaskTable from './TaskTable';
import StageTable from './StageTable';
import {useState, useEffect} from 'react'
import {useSession} from "next-auth/react";
import coaching  from '../utils/skeletonCoaching';

const MainTable = () => {

  let amIAdmin = false;
  const {data: session} = useSession();

  //getting all the users who have logged in (at least once) to this app
  // and have been registered in collection 'users' in DB
  const [listTrainees, setListTrainees] = useState([]);
  const retreiveUsers = async() => {
    try{
      const response = await fetch('/api/users', {method: 'GET'});
      const data = await response.json();
      setListTrainees(data);
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
  const validateAdmin = () => {  
  listTrainees.map((item)=>{
    //finding myseld on the list of users
    if(item.email === session?.user?.email){
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
      }
    });
  }
  useEffect(()=>{
    validateAdmin();
  }, [listTrainees]); 




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
   //if this task is already opened
   if(openedTask===stageNumber){
    setOpenedTask('-1');
   }else{
    setOpenedTask(stageNumber);
   }
  }


  

  return (
  <div className='my-5 relative' dir="rtl">
    <div className="overflow-x-auto">    
      <StageTable stageNumber="1" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees}/>
      {openedTask==='1' && <TaskTable stageNumber="1" updateDB={updateDB} listTrainees={listTrainees}/>}
      <StageTable stageNumber="2" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees}/>
      {openedTask==='2' && <TaskTable stageNumber="2" updateDB={updateDB} listTrainees={listTrainees}/>}
      <StageTable stageNumber="3" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees}/>
      {openedTask==='3' && <TaskTable stageNumber="3" updateDB={updateDB} listTrainees={listTrainees} />}
      <StageTable stageNumber="4" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees}/>
      {openedTask==='4' && <TaskTable stageNumber="4" updateDB={updateDB} listTrainees={listTrainees} />}
      <StageTable stageNumber="5" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees}/>
      {openedTask==='5' && <TaskTable stageNumber="5" updateDB={updateDB} listTrainees={listTrainees}/>}
      <StageTable stageNumber="6" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees}/>
      {openedTask==='6' && <TaskTable stageNumber="6" updateDB={updateDB} listTrainees={listTrainees} />}
      <StageTable stageNumber="7" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees}/>
      {openedTask==='7' && <TaskTable stageNumber="7" updateDB={updateDB} listTrainees={listTrainees} />}
      <StageTable stageNumber="8" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees}/>
      {openedTask==='8' && <TaskTable stageNumber="8" updateDB={updateDB} listTrainees={listTrainees} />}
      <StageTable stageNumber="9" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees}/>
      {openedTask==='9' && <TaskTable stageNumber="9" updateDB={updateDB} listTrainees={listTrainees}/>}
      <StageTable stageNumber="10" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask} updateDB={updateDB} listTrainees={listTrainees}/>
      {openedTask==='10' && <TaskTable stageNumber="10" updateDB={updateDB} listTrainees={listTrainees}/>} 
  
    </div>
  </div>  
  )
}

export default MainTable
