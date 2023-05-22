'use client'
import {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserCircle, faFileCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import DateSelector from '../components/DateSelector';
import {useSession} from "next-auth/react";
import {stage1,stage2,stage3,stage4,stage5,stage6,stage7,stage8,stage9,stage10} from "../utils/stages";


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
      finally{  console.log("hhhhhhhhhhhhhh");}   
  }


  //checking if the logged in user is an admin
  const validateAdmin = () => {
    listTrainees.map((item)=>{
      //finding myseld on the list of users
      if(item.email === session?.user?.email){
        amIAdmin = item.isAdmin;
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
   case '1':  relevantStage=stage1; break;
   case '2':  relevantStage=stage2; break;
   case '3':  relevantStage=stage3; break;
   case '4':  relevantStage=stage4; break;
   case '5':  relevantStage=stage5; break;
   case '6':  relevantStage=stage6; break;
   case '7':  relevantStage=stage7; break;
   case '8':  relevantStage=stage8; break;
   case '9':  relevantStage=stage9; break;
   case '10':  relevantStage=stage10; break;
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

 
  switch(stageNumber){
    case '1': name=stage1.name; status=stage1.status; trainees=stage1.trainees; lastStage=stage1.lastStage; durationInDays=stage1.durationInDays;  plannedTimeInHours=stage1.plannedTimeInHours; break;
    case '2': name=stage2.name; status=stage2.status; trainees=stage2.trainees; lastStage=stage2.lastStage; durationInDays=stage2.durationInDays;  plannedTimeInHours=stage2.plannedTimeInHours; break;
    case '3': name=stage3.name; status=stage3.status; trainees=stage3.trainees; lastStage=stage3.lastStage; durationInDays=stage3.durationInDays;  plannedTimeInHours=stage3.plannedTimeInHours; break;
    case '4': name=stage4.name; status=stage4.status; trainees=stage4.trainees; lastStage=stage4.lastStage; durationInDays=stage4.durationInDays;  plannedTimeInHours=stage4.plannedTimeInHours; break;
    case '5': name=stage5.name; status=stage5.status; trainees=stage5.trainees; lastStage=stage5.lastStage; durationInDays=stage5.durationInDays;  plannedTimeInHours=stage5.plannedTimeInHours; break;
    case '6': name=stage6.name; status=stage6.status; trainees=stage6.trainees; lastStage=stage6.lastStage; durationInDays=stage6.durationInDays;  plannedTimeInHours=stage6.plannedTimeInHours; break;
    case '7': name=stage7.name; status=stage7.status; trainees=stage7.trainees; lastStage=stage7.lastStage; durationInDays=stage7.durationInDays;  plannedTimeInHours=stage7.plannedTimeInHours; break;
    case '8': name=stage8.name; status=stage8.status; trainees=stage8.trainees; lastStage=stage8.lastStage; durationInDays=stage8.durationInDays;  plannedTimeInHours=stage8.plannedTimeInHours; break;
    case '9': name=stage9.name; status=stage9.status; trainees=stage9.trainees; lastStage=stage9.lastStage; durationInDays=stage9.durationInDays;  plannedTimeInHours=stage9.plannedTimeInHours; break;
    case '10': name=stage10.name; status=stage10.status; trainees=stage10.trainees; lastStage=stage10.lastStage; durationInDays=stage10.durationInDays;  plannedTimeInHours=stage10.plannedTimeInHours; break;
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
    case '1':  name=stage1.tasks[index].name; status=stage1.tasks[index].status; trainees=stage1.tasks[index].trainees; connectBoard=stage1.tasks[index].connectBoard; stage1.tasks[index].files; break;
    case '2':  name=stage2.tasks[index].name; status=stage2.tasks[index].status; trainees=stage2.tasks[index].trainees; connectBoard=stage2.tasks[index].connectBoard; stage2.tasks[index].files; break;
    case '3':  name=stage3.tasks[index].name; status=stage3.tasks[index].status; trainees=stage3.tasks[index].trainees; connectBoard=stage3.tasks[index].connectBoard; stage3.tasks[index].files; break;
    case '4':  name=stage4.tasks[index].name; status=stage4.tasks[index].status; trainees=stage4.tasks[index].trainees; connectBoard=stage4.tasks[index].connectBoard; stage4.tasks[index].files; break;
    case '5':  name=stage5.tasks[index].name; status=stage5.tasks[index].status; trainees=stage5.tasks[index].trainees; connectBoard=stage5.tasks[index].connectBoard; stage5.tasks[index].files; break;
    case '6':  name=stage6.tasks[index].name; status=stage6.tasks[index].status; trainees=stage6.tasks[index].trainees; connectBoard=stage6.tasks[index].connectBoard; stage6.tasks[index].files; break;
    case '7':  name=stage7.tasks[index].name; status=stage7.tasks[index].status; trainees=stage7.tasks[index].trainees; connectBoard=stage7.tasks[index].connectBoard; stage7.tasks[index].files; break;
    case '8':  name=stage8.tasks[index].name; status=stage8.tasks[index].status; trainees=stage8.tasks[index].trainees; connectBoard=stage8.tasks[index].connectBoard; stage8.tasks[index].files; break;
    case '9':  name=stage9.tasks[index].name; status=stage9.tasks[index].status; trainees=stage9.tasks[index].trainees; connectBoard=stage9.tasks[index].connectBoard; stage9.tasks[index].files; break;
    case '10':  name=stage10.tasks[index].name; status=stage10.tasks[index].status; trainees=stage10.tasks[index].trainees; connectBoard=stage10.tasks[index].connectBoard; stage10.tasks[index].files; break;
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
