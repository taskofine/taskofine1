'use client'
import {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserCircle, faFileCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import DateSelector from '../components/DateSelector';
import {useSession} from "next-auth/react";
import coaching  from '../utils/skeletonCoaching';

const Stage = ({stageNumber, listTrainees, toggleTasks, openedTask,setOpenedTask}) => {

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
  const retreiveSkeletonDB = () => {
    //update the skeleton to hold the paralel data existing for this user on DB
    listTrainees.map((item)=>{
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
    });
   
  
  } 

  const [tasksOpen, setTasksOpen] = useState(false);


        let name='';
        let status='';
        let trainees=[];
        let lastStage='';
        let durationInDays='';
        let plannedTimeInHours='';
       
        if(listTrainees.length>0){
         retreiveSkeletonDB();
        }
       
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
       
       
       
         const [inputPlannedTimeValue, setInputPlannedTimeValue] = useState(coaching.stage1.plannedTimeInHours);
       
       
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
           
           <input
               className='border'
               type="text"
               value={inputPlannedTimeValue}
               onChange={(event)=>{
                 setInputPlannedTimeValue(event.target.value);
               }}
               onKeyDown={(event)=>{
                 if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                   event.preventDefault();
                 }
               }
             }
             onBlur={(event)=> {
               const val = event.target.value; 
               
               switch(stageNumber){
                case '1': coaching.stage1.plannedTimeInHours = val;  break;
                case '2': coaching.stage2.plannedTimeInHours = val; break;
                case '3': coaching.stage3.plannedTimeInHours = val; break;
                case '4': coaching.stage4.plannedTimeInHours = val; break;
                case '5':  coaching.stage5.plannedTimeInHours = val; break;
                case '6': coaching.stage6.plannedTimeInHours = val; break;
                case '7': coaching.stage7.plannedTimeInHours = val; break;
                case '8': coaching.stage8.plannedTimeInHours = val; break;
                case '9': coaching.stage9.plannedTimeInHours = val; break;
                case '10': coaching.stage10.plannedTimeInHours = val; break;
                default: break;
               }
               updateDB();
             }}  
             />
           </td>
         </tr> 
         );
        } 


export default Stage