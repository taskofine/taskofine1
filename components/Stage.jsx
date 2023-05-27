'use client'
import {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserCircle, faFileCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import DateSelector from '../components/DateSelector';
import {useSession} from "next-auth/react";
import coaching  from '../utils/skeletonCoaching';


let countedStages = [];

const Stage = ({stageNumber, listTrainees, toggleTasks, openedTask,setOpenedTask,updateDB, isSkeletonUpdated}) => {
 
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
  const [inputDurationInDays,setInputDurationInDays] = useState("0");
  const [inputLastStage, setInputLastStage] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputTrainees, setInputTrainees] = useState([]);
  const [inputStartPeriod, setInputStartPeriod] = useState(null);
  const [inputEndPeriod, setInputEndPeriod] = useState(null);
  
  let name='';
  let status='';
  let trainees=[];
  let lastStage='';
  let durationInDays='';
  let plannedTimeInHours='';

  
  
   useEffect(()=>{ 
    if(!isSkeletonUpdated) return;
    console.log("ccccccccccccccccc"); 
    if(!countedStages.includes(stageNumber)){
      countedStages.push(stageNumber);
      switch(stageNumber){
        case '1': 
          setInputPlannedTimeValue(coaching.stage1.plannedTimeInHours);  
          setInputDurationInDays(coaching.stage1.durationInDays);
          setInputLastStage(coaching.stage1.lastStage);
          setStatus(coaching.stage1.status);
          setInputName(coaching.stage1.name);
          setInputTrainees(coaching.stage1.trainees);
          setInputStartPeriod(coaching.stage1.startPeriod);
          setInputEndPeriod(coaching.stage1.endPeriod);
         
          break;
        case '2': 
          setInputPlannedTimeValue(coaching.stage2.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage2.durationInDays);
          setInputLastStage(coaching.stage2.lastStage);
          setStatus(coaching.stage2.status);
          setInputName(coaching.stage2.name);
          setInputTrainees(coaching.stage2.trainees);
          setInputStartPeriod(coaching.stage2.startPeriod);
          setInputEndPeriod(coaching.stage2.endPeriod);
          break;
        case '3': 
          setInputPlannedTimeValue(coaching.stage3.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage3.durationInDays);
          setInputLastStage(coaching.stage3.lastStage);
          setStatus(coaching.stage3.status);
          setInputName(coaching.stage3.name);
          setInputTrainees(coaching.stage3.trainees);
          setInputStartPeriod(coaching.stage3.startPeriod);
          setInputEndPeriod(coaching.stage3.endPeriod);
          break;
        case '4': 
          setInputPlannedTimeValue(coaching.stage4.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage4.durationInDays);
          setInputLastStage(coaching.stage4.lastStage);
          setStatus(coaching.stage4.status);
          setInputName(coaching.stage4.name);
          setInputTrainees(coaching.stage4.trainees);
          setInputStartPeriod(coaching.stage4.startPeriod);
          setInputEndPeriod(coaching.stage4.endPeriod);
          break;
        case '5': 
          setInputPlannedTimeValue(coaching.stage5.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage5.durationInDays);
          setInputLastStage(coaching.stage5.lastStage);
          setStatus(coaching.stage5.status);
          setInputName(coaching.stage5.name);
          setInputTrainees(coaching.stage5.trainees);
          setInputStartPeriod(coaching.stage5.startPeriod);
          setInputEndPeriod(coaching.stage5.endPeriod);
          break;
        case '6': 
          setInputPlannedTimeValue(coaching.stage6.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage6.durationInDays);
          setInputLastStage(coaching.stage6.lastStage);
          setStatus(coaching.stage6.status);
          setInputName(coaching.stage6.name);
          setInputTrainees(coaching.stage6.trainees);
          setInputStartPeriod(coaching.stage6.startPeriod);
          setInputEndPeriod(coaching.stage6.endPeriod);
          break;
        case '7': 
          setInputPlannedTimeValue(coaching.stage7.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage7.durationInDays);
          setInputLastStage(coaching.stage7.lastStage);
          setStatus(coaching.stage7.status);
          setInputName(coaching.stage7.name);
          setInputTrainees(coaching.stage7.trainees);
          setInputStartPeriod(coaching.stage7.startPeriod);
          setInputEndPeriod(coaching.stage7.endPeriod);
          break;
        case '8': 
          setInputPlannedTimeValue(coaching.stage8.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage8.durationInDays);
          setInputLastStage(coaching.stage8.lastStage);
          setStatus(coaching.stage8.status);
          setInputName(coaching.stage8.name);
          setInputTrainees(coaching.stage8.trainees);
          setInputStartPeriod(coaching.stage8.startPeriod);
          setInputEndPeriod(coaching.stage8.endPeriod);
          break;
        case '9': 
          setInputPlannedTimeValue(coaching.stage9.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage9.durationInDays);
          setInputLastStage(coaching.stage9.lastStage);
          setStatus(coaching.stage9.status);
          setInputName(coaching.stage9.name);
          setInputTrainees(coaching.stage9.trainees);
          setInputStartPeriod(coaching.stage9.startPeriod);
          setInputEndPeriod(coaching.stage9.endPeriod);
          break;
        case '10': 
        setInputPlannedTimeValue(coaching.stage10.plannedTimeInHours); 
        setInputDurationInDays(coaching.stage10.durationInDays);
        setInputLastStage(coaching.stage10.lastStage);
        setStatus(coaching.stage10.status);
        setInputName(coaching.stage10.name);
        setInputTrainees(coaching.stage10.trainees);
        setInputStartPeriod(coaching.stage10.startPeriod);
        setInputEndPeriod(coaching.stage10.endPeriod);
        break;
        default:break;
      }
    
    }  
   },[isSkeletonUpdated]);
   

  
  return (
    <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <span onClick={() => toggleTasks(stageNumber)} className='ml-2'>
          <FontAwesomeIcon icon={faArrowDown } size="xl" style={{color:'#000000'}}/>
        </span>
          
        <input
               className='border'
               type="text"
               value={inputName}
               onChange={(event)=>{
                 setInputName (event.target.value);
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
                case '1': coaching.stage1.name = val;  break;
                case '2': coaching.stage2.name  = val; break;
                case '3': coaching.stage3.name  = val; break;
                case '4': coaching.stage4.name  = val; break;
                case '5':  coaching.stage5.name  = val; break;
                case '6': coaching.stage6.name  = val; break;
                case '7': coaching.stage7.name  = val; break;
                case '8': coaching.stage8.name  = val; break;
                case '9': coaching.stage9.name  = val; break;
                case '10': coaching.stage10.name  = val; break;
                default: break;
               }
               updateDB();
             }}  
             />

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
      <DateSelector type="start" stageNumber={stageNumber} updateDB={updateDB}  startPeriod={inputStartPeriod}/>
        <span> עד </span>
        <DateSelector type="end" stageNumber={stageNumber} updateDB={updateDB}  endPeriod={inputEndPeriod}/>
      </td>
      <td className="px-6 py-4" >
        <FontAwesomeIcon icon={faUserCircle } size="xl" style={{color:'#008B8B'}} onClick={setTrainees} />
          {isTraineesOpen && (
          <div className='bg-slate-500 flex flex-col justify-center'>
            <input type="text" 
              value={inputTrainees[0]}  
              onChange={setInputTrainees } 
              placeholder='חיפוש מתאמנים' 
              className="border border-gray-300 m-2 px-4 py-2 rounded-md w-25"
            />
            <p className='my-3 mx-2 text-white'>המלצות:</p> 
          </div>
            )}
          </td>
          <td className="px-6 py-4">  
            <input
               className='border'
               type="text"
               value={inputLastStage}
               onChange={(event)=>{
                 setInputLastStage(event.target.value);
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
                 case '1': coaching.stage1.lastStage  = val;  break;
                 case '2': coaching.stage2.lastStage  = val; break;
                 case '3': coaching.stage3.lastStage  = val; break;
                 case '4': coaching.stage4.lastStage  = val; break;
                 case '5':  coaching.stage5.lastStage  = val; break;
                 case '6': coaching.stage6.lastStage  = val; break;
                 case '7': coaching.stage7.lastStage  = val; break;
                 case '8': coaching.stage8.lastStage  = val; break;
                 case '9': coaching.stage9.lastStage  = val; break;
                 case '10': coaching.stage10.lastStage  = val; break;
                 default: break;
                }
                updateDB();
               }}  
             />
           </td>
           <td className="px-6 py-4">
           <input
               className='border'
               type="text"
               value={inputDurationInDays}
               onChange={(event)=>{
                 setInputDurationInDays(event.target.value);
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
                case '1': coaching.stage1.durationInDays = val;  break;
                case '2': coaching.stage2.durationInDays  = val; break;
                case '3': coaching.stage3.durationInDays  = val; break;
                case '4': coaching.stage4.durationInDays  = val; break;
                case '5':  coaching.stage5.durationInDays  = val; break;
                case '6': coaching.stage6.durationInDays  = val; break;
                case '7': coaching.stage7.durationInDays  = val; break;
                case '8': coaching.stage8.durationInDays  = val; break;
                case '9': coaching.stage9.durationInDays  = val; break;
                case '10': coaching.stage10.durationInDays  = val; break;
                default: break;
               }
               updateDB();
             }}  
             />
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
