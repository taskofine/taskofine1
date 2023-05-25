'use client'
import {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserCircle, faFileCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import DateSelector from '../components/DateSelector';
import {useSession} from "next-auth/react";
import coaching  from '../utils/skeletonCoaching';


const Stage = ({stageNumber, listTrainees, toggleTasks, openedTask,setOpenedTask,updateDB}) => {
 
  const {data: session} = useSession();

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

  const [tasksOpen, setTasksOpen] = useState(false);
  const [inputPlannedTimeValue, setInputPlannedTimeValue] = useState("0"); 
  
  let name='';
  let status='';
  let trainees=[];
  let lastStage='';
  let durationInDays='';
  let plannedTimeInHours='';
  
   setTimeout(()=>{
    switch(stageNumber){
      case '1': setInputPlannedTimeValue(coaching.stage1.plannedTimeInHours); break;
      case '2': setInputPlannedTimeValue(coaching.stage2.plannedTimeInHours); break;
      case '3': setInputPlannedTimeValue(coaching.stage3.plannedTimeInHours); break;
      case '4': setInputPlannedTimeValue(coaching.stage4.plannedTimeInHours); break;
      case '5': setInputPlannedTimeValue(coaching.stage5.plannedTimeInHours); break;
      case '6': setInputPlannedTimeValue(coaching.stage6.plannedTimeInHours); break;
      case '7': setInputPlannedTimeValue(coaching.stage7.plannedTimeInHours); break;
      case '8': setInputPlannedTimeValue(coaching.stage8.plannedTimeInHours); break;
      case '9': setInputPlannedTimeValue(coaching.stage9.plannedTimeInHours); break;
      case '10': setInputPlannedTimeValue(coaching.stage10.plannedTimeInHours); break;
      default:break;
    }
    
   },1000);

       
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
