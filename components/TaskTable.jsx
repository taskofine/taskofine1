'use client'
import {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserCircle, faFileCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import DateSelector from '../components/DateSelector';
import {useSession} from "next-auth/react";
import coaching  from '../utils/skeletonCoaching';


const TaskTable = () => {
  const {data: session} = useSession();
  let amIAdmin = false;
  const [tasksOpen, setTasksOpen] = useState(false);
  const [openedTask, setOpenedTask]  = useState('-1');
  const toggleTasks = (stageNumber) =>{
   //if this task is already opened
   if(openedTask===stageNumber){
    setOpenedTask('-1');
   }else{
    setOpenedTask(stageNumber);
   }
    
   tasksOpen? setTasksOpen(false) : setTasksOpen(true);
  }
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const setStatus =  () =>  {
    setIsStatusOpen(!isStatusOpen);
  }
  const [isTimetableOpen, setIsTimetableOpen] = useState(false);
  const setTimetable =  () =>  {
    setIsTimetableOpen(!isTimetableOpen);
  }
  const [isTraineesOpen, setIsTraineesOpen] = useState(false);
  const setTrainees =  () =>  {
    setIsTraineesOpen(!isTraineesOpen);
  }
  const [valueSearchTrainees, setValueSearchTrainees] = useState("");
  const [listTrainees, setListTrainees] = useState([]);  
  const handleChangeSearchTrainees = (text) => {
    console.log("aaaaaaaaaaaaa="  + text.target.value);
  }
  const [isTaskStatusOpen, setIsTaskStatusOpen] = useState(false);
  const setTaskStatus = () => {
  
    setIsTaskStatusOpen(!isTaskStatusOpen);
  }


  //getting all the users who have logged in (at least once) to this app
  // and have been registered in collection 'users' in DB
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


  //checking if the logged in user is an admin
  const validateAdmin = () => {  
    listTrainees.map((item)=>{
      //finding myseld on the list of users
      if(item.email === session?.user?.email){
        amIAdmin = item.isAdmin;
        //update the skeleton to hold the paralel data existing for this user on DB
        coaching.stage1 = item.coaching.stage1;
        coaching.stage2 = item.coaching.stage2;
        coaching.stage3 = item.coaching.stage3;
        coaching.stage4 = item.coaching.stage4;
        coaching.stage5 = item.coaching.stage5;
        coaching.stage6 = item.coaching.stage6;
        coaching.stage7 = item.coaching.stage7;
        coaching.stage8 = item.coaching.stage8;
        coaching.stage9 = item.coaching.stage9;
        coaching.stage10 = item.coaching.stage10;
       
      }
    });
  } 
 

  useEffect(()=>{
   retreiveUsers();
  }, []);
  

  useEffect(()=>{
    validateAdmin();
  }, [listTrainees]);




  

const StageTable = ({stageNumber}) => {
  return (
    <table  className="rtl-table w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
        השלב
        </th>
        <th scope="col" className="px-6 py-3">
         צ'ט
        </th>
        <th scope="col" className="px-6 py-3">
         סטטוס
        </th>
        <th scope="col" className="px-6 py-3">
         לוז
        </th>
        <th scope="col" className="px-6 py-3">
         מבצע
        </th>
        <th scope="col" className="px-6 py-3">
         שלב קודם
        </th>
        <th scope="col" className="px-6 py-3">
         משך
        </th>
        <th scope="col" className="px-6 py-3">
         זמן מתוכנן
        </th>
      </tr>
    </thead>
    <tbody>
     <Stage stageNumber={stageNumber}/>
    </tbody>
  </table>
  );
}








const TaskTable = ({stageNumber}) =>{
  let relevantStage;
  switch(stageNumber){
   case '1':  relevantStage=coaching.stage1; break;
   case '2':  relevantStage=coaching.stage2; break;
   case '3':  relevantStage=coaching.stage3; break;
   case '4':  relevantStage=coaching.stage4; break;
   case '5':  relevantStage=coaching.stage5; break;
   case '6':  relevantStage=coaching.stage6; break;
   case '7':  relevantStage=coaching.stage7; break;
   case '8':  relevantStage=coaching.stage8; break;
   case '9':  relevantStage=coaching.stage9; break;
   case '10':  relevantStage=coaching.stage10; break;
  }

  return stageNumber===openedTask ?
     (
      <div className="relative overflow-x-auto mr-7 mt-5" >
      <table   className="rtl-table w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
           המשימה
            </th>
            <th scope="col" className="px-6 py-3">
             צ'ט
            </th>
            <th scope="col" className="px-6 py-3">
             סטטוס המשימה
            </th>
            <th scope="col" className="px-6 py-3">
             מועד הגשה
            </th>
            <th scope="col" className="px-6 py-3">
             מבצע המשימה
            </th>
            <th scope="col" className="px-6 py-3">
            Connect Board
            </th>
            <th scope="col" className="px-6 py-3">
             קבצים
            </th>
          </tr>
        </thead>
        <tbody>
          {
            
            relevantStage.tasks.map((item,index)=>{  
             return <Task stageNumber={stageNumber} index={index}/>
           }) 
          }
       
       
        </tbody>
      </table>
    </div>
  ) : (<></>) 
}







 const Stage = ({stageNumber}) => {

 let name='';
 let status='';
 let trainees=[];
 let lastStage='';
 let durationInDays='';
 let plannedTimeInHours='';

 //console.log("dddddddddddddd=" + JSON.stringify(coaching.stage1));

  switch(stageNumber){
    case '1': name=coaching.stage1.name; status=coaching.stage1.status; trainees=coaching.stage1.trainees; lastStage=coaching.stage1.lastStage; durationInDays=coaching.stage1.durationInDays;  plannedTimeInHours=coaching.stage1.plannedTimeInHours; break;
    case '2': name=coaching.stage2.name; status=coaching.stage2.status; trainees=coaching.stage2.trainees; lastStage=coaching.stage2.lastStage; durationInDays=coaching.stage2.durationInDays;  plannedTimeInHours=coaching.stage2.plannedTimeInHours; break;
    case '3': name=coaching.stage3.name; status=coaching.stage3.status; trainees=coaching.stage3.trainees; lastStage=coaching.stage3.lastStage; durationInDays=coaching.stage3.durationInDays;  plannedTimeInHours=coaching.stage3.plannedTimeInHours; break;
    case '4': name=coaching.stage4.name; status=coaching.stage4.status; trainees=coaching.stage4.trainees; lastStage=coaching.stage4.lastStage; durationInDays=coaching.stage4.durationInDays;  plannedTimeInHours=coaching.stage4.plannedTimeInHours; break;
    case '5': name=coaching.stage5.name; status=coaching.stage5.status; trainees=coaching.stage5.trainees; lastStage=coaching.stage5.lastStage; durationInDays=coaching.stage5.durationInDays;  plannedTimeInHours=coaching.stage5.plannedTimeInHours; break;
    case '6': name=coaching.stage6.name; status=coaching.stage6.status; trainees=coaching.stage6.trainees; lastStage=coaching.stage6.lastStage; durationInDays=coaching.stage6.durationInDays;  plannedTimeInHours=coaching.stage6.plannedTimeInHours; break;
    case '7': name=coaching.stage7.name; status=coaching.stage7.status; trainees=coaching.stage7.trainees; lastStage=coaching.stage7.lastStage; durationInDays=coaching.stage7.durationInDays;  plannedTimeInHours=coaching.stage7.plannedTimeInHours; break;
    case '8': name=coaching.stage8.name; status=coaching.stage8.status; trainees=coaching.stage8.trainees; lastStage=coaching.stage8.lastStage; durationInDays=coaching.stage8.durationInDays;  plannedTimeInHours=coaching.stage8.plannedTimeInHours; break;
    case '9': name=coaching.stage9.name; status=coaching.stage9.status; trainees=coaching.stage9.trainees; lastStage=coaching.stage9.lastStage; durationInDays=coaching.stage9.durationInDays;  plannedTimeInHours=coaching.stage9.plannedTimeInHours; break;
    case '10': name=coaching.stage10.name; status=coaching.stage10.status; trainees=coaching.stage10.trainees; lastStage=coaching.stage10.lastStage; durationInDays=coaching.stage10.durationInDays;  plannedTimeInHours=coaching.stage10.plannedTimeInHours; break;
    default:
      break;  
  }

  return (
    <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    <span onClick={() => toggleTasks(stageNumber)} className='ml-2'>
      <FontAwesomeIcon icon={faArrowDown } size="xl" style={{color:'#000000'}}/>
    </span>
      {
        name
      }
    </td>
    <td className="px-6 py-4">
      <FontAwesomeIcon icon={faComment } size="xl" style={{color:'#FFD700'}}/>
    </td>
    <td className="px-6 py-4" onClick={setStatus} >
     {status}
     {isStatusOpen && (
         <div className='bg-white'>
           <p className='bg-orange-400 px-8 py-2 rounded-lg my-1'>חדש</p>
           <p className='bg-green-400 px-8 py-2 rounded-lg my-1'>בוצע</p>
           <p className='bg-gray-400 px-8 py-2 rounded-lg my-1'>סגור</p>
         </div>
     )}
    </td>
    <td className="px-6 py-4" onClick={setTimetable}>
    <DateSelector className=""/>
    <span> עד </span>
    <DateSelector className=""/>
    </td>
    <td className="px-6 py-4" >
      <FontAwesomeIcon icon={faUserCircle } size="xl" style={{color:'#008B8B'}} onClick={setTrainees} />
      {isTraineesOpen && (
         <div className='bg-slate-500 flex flex-col justify-center'>
           <input type="text" 
            value={valueSearchTrainees}  
            onChange={handleChangeSearchTrainees } 
            placeholder='חיפוש מתאמנים' 
            className="border border-gray-300 m-2 px-4 py-2 rounded-md w-25"
            />
            <p className='my-3 mx-2 text-white'>המלצות:</p> 
         </div>
     )}
    </td>
    <td className="px-6 py-4">
      {lastStage}
    </td>
    <td className="px-6 py-4">
     {durationInDays}
    </td>
    <td className="px-6 py-4">
      {plannedTimeInHours}
    </td>
  </tr> 
  );
 } 







 const Task = ({stageNumber,index})=>{ 
  let name='';
  let status='';
  let trainees = [];
  let connectBoard='';
  let files=[];
  switch(stageNumber){
    case '1':  name=coaching.stage1.tasks[index].name; status=coaching.stage1.tasks[index].status; trainees=coaching.stage1.tasks[index].trainees; connectBoard=coaching.stage1.tasks[index].connectBoard; files=coaching.stage1.tasks[index].files; break;
    case '2':  name=coaching.stage2.tasks[index].name; status=coaching.stage2.tasks[index].status; trainees=coaching.stage2.tasks[index].trainees; connectBoard=coaching.stage2.tasks[index].connectBoard; files=coaching.stage2.tasks[index].files; break;
    case '3':  name=coaching.stage3.tasks[index].name; status=coaching.stage3.tasks[index].status; trainees=coaching.stage3.tasks[index].trainees; connectBoard=coaching.stage3.tasks[index].connectBoard; files=coaching.stage3.tasks[index].files; break;
    case '4':  name=coaching.stage4.tasks[index].name; status=coaching.stage4.tasks[index].status; trainees=coaching.stage4.tasks[index].trainees; connectBoard=coaching.stage4.tasks[index].connectBoard; files=coaching.stage4.tasks[index].files; break;
    case '5':  name=coaching.stage5.tasks[index].name; status=coaching.stage5.tasks[index].status; trainees=coaching.stage5.tasks[index].trainees; connectBoard=coaching.stage5.tasks[index].connectBoard; files=coaching.stage5.tasks[index].files; break;
    case '6':  name=coaching.stage6.tasks[index].name; status=coaching.stage6.tasks[index].status; trainees=coaching.stage6.tasks[index].trainees; connectBoard=coaching.stage6.tasks[index].connectBoard; files=coaching.stage6.tasks[index].files; break;
    case '7':  name=coaching.stage7.tasks[index].name; status=coaching.stage7.tasks[index].status; trainees=coaching.stage7.tasks[index].trainees; connectBoard=coaching.stage7.tasks[index].connectBoard; files=coaching.stage7.tasks[index].files; break;
    case '8':  name=coaching.stage8.tasks[index].name; status=coaching.stage8.tasks[index].status; trainees=coaching.stage8.tasks[index].trainees; connectBoard=coaching.stage8.tasks[index].connectBoard; files=coaching.stage8.tasks[index].files; break;
    case '9':  name=coaching.stage9.tasks[index].name; status=coaching.stage9.tasks[index].status; trainees=coaching.stage9.tasks[index].trainees; connectBoard=coaching.stage9.tasks[index].connectBoard; files=coaching.stage9.tasks[index].files; break;
    case '10': name=coaching.stage10.tasks[index].name; status=coaching.stage10.tasks[index].status; trainees=coaching.stage10.tasks[index].trainees; connectBoard=coaching.stage10.tasks[index].connectBoard; files=coaching.stage10.tasks[index].files; break;
    default:  break; 
  }


  
  return(
    <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {name}
    </th>
    <td className="px-6 py-4">
      <FontAwesomeIcon icon={faComment }  size="xl"  style={{color:'#FFD700'}}/>
    </td>
    <td className="px-6 py-4" >
    <span onClick={setTaskStatus}>{status}</span>
    {isTaskStatusOpen && (
       <div className='bg-white flex flex-wrap static w-40'>
         <p className='bg-orange-400 w-40 text-center mt-2 p-2 rounded-md'>משימה חדשה</p>
         <p className='bg-green-400 w-40 text-center mt-2 p-2 rounded-md'>משימה בוצעה</p>
         <p className='bg-yellow-400 w-40 text-center mt-2 p-2 rounded-md'>משימה בבדיקה</p>
         <p className='bg-orange-400 w-40 text-center mt-2 p-2 rounded-md'>משימה לעריכה</p>
         <p className='bg-pink-400 w-40 text-center mt-2 p-2 rounded-md'>משימה נערכה</p>
         <p className='bg-orange-600 w-40 text-center mt-2 p-2 rounded-md'>אלחי תציל אותי</p>
         <p className='bg-purple-600 w-40 text-center mt-2 p-2 rounded-md'>הושלם בהצלחה</p>
         <p className='bg-black text-white w-40 text-center mt-2 p-2 rounded-md'>איחור בהגשה</p>
       </div>
   )}
    </td>
    <td className="px-6 py-4">
     01-06-2023
    </td>
    <td className="px-6 py-4 text-center">
      <FontAwesomeIcon icon={faUserCircle }  size="xl" style={{color:'#008B8B'}} />
    </td>
    <td className="px-6 py-4">
      {connectBoard}
    </td>
    <td className="px-6 py-4 text-center">
      <FontAwesomeIcon   icon={faFileCode }  size="xl" style={{color:'#DC143C'}}/>
    </td>
  </tr>
  );
 }





  return (
  <div className='my-5 relative' dir="rtl">
    <div className="overflow-x-auto">  
      <StageTable stageNumber="1"/>
      <TaskTable stageNumber="1"/>
      <StageTable stageNumber="2"/>
      <TaskTable stageNumber="2"/>
      <StageTable stageNumber="3"/>
      <TaskTable stageNumber="3"/>
      <StageTable stageNumber="4"/>
      <TaskTable stageNumber="4"/>
      <StageTable stageNumber="5"/>
      <TaskTable stageNumber="5"/>
      <StageTable stageNumber="6"/>
      <TaskTable stageNumber="6"/>
      <StageTable stageNumber="7"/>
      <TaskTable stageNumber="7"/>
      <StageTable stageNumber="8"/>
      <TaskTable stageNumber="8"/>
      <StageTable stageNumber="9"/>
      <TaskTable stageNumber="9"/>
      <StageTable stageNumber="10"/>
      <TaskTable stageNumber="10"/>
    </div>
   
  </div>  


  )
}

export default TaskTable
