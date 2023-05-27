'use client'
import {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserCircle, faFileCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {useSession} from "next-auth/react";
import coaching  from '../utils/skeletonCoaching';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


const Task = ({stageNumber,index, updateDB, indexRenderedTasks, setIndexRenderedTasks, isSkeletonUpdated}) => {
  let name='';
  let status='';
  let trainees = [];
  let connectBoard='';
  let files=[];

  const [isTaskStatusOpen, setIsTaskStatusOpen] = useState(false);
  const setTaskStatus = () => {
  
    setIsTaskStatusOpen(!isTaskStatusOpen);
  }
  
  const [inputConnectBoard, setInputConnectBoard] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [inputEndDate, setInputEndDate] = useState(new Date());
  

  useEffect(()=>{
    if(!(indexRenderedTasks.includes(index))){
      //updating indexRenderedTasks to hold also this index
      let arr = indexRenderedTasks;
      arr.push(index);
      setIndexRenderedTasks(arr);
      switch(stageNumber){
        case '1': 
          setInputName(coaching.stage1.tasks[index].name);
          setInputStatus(coaching.stage1.tasks[index].status);
          setInputConnectBoard(coaching.stage1.tasks[index].connectBoard);
          setInputEndDate(coaching.stage1.tasks[index].endTime.toString());
          
          break;
        case '2': 
          setInputName(coaching.stage2.tasks[index].name);
          setInputStatus(coaching.stage2.tasks[index].status);
          setInputConnectBoard(coaching.stage2.tasks[index].connectBoard);
          setInputEndDate(coaching.stage2.tasks[index].endTime.toString());
          break;
        case '3': 
          setInputName(coaching.stage3.tasks[index].name);
          setInputStatus(coaching.stage3.tasks[index].status);
          setInputConnectBoard(coaching.stage3.tasks[index].connectBoard);
          setInputEndDate(coaching.stage3.tasks[index].endTime.toString());
          break;
        case '4': 
          setInputName(coaching.stage4.tasks[index].name);
          setInputStatus(coaching.stage4.tasks[index].status);
          setInputConnectBoard(coaching.stage4.tasks[index].connectBoard);
          setInputEndDate(coaching.stage4.tasks[index].endTime.toString());
          break;
        case '5': 
          setInputName(coaching.stage5.tasks[index].name);
          setInputStatus(coaching.stage5.tasks[index].status);
          setInputConnectBoard(coaching.stage5.tasks[index].connectBoard);
          setInputEndDate(coaching.stage5.tasks[index].endTime.toString());
          break; 
        case '6': 
          setInputName(coaching.stage6.tasks[index].name);
          setInputStatus(coaching.stage6.tasks[index].status);
          setInputConnectBoard(coaching.stage6.tasks[index].connectBoard);
          setInputEndDate(coaching.stage6.tasks[index].endTime.toString());
          break;
        case '7': 
          setInputName(coaching.stage7.tasks[index].name);
          setInputStatus(coaching.stage7.tasks[index].status);
          setInputConnectBoard(coaching.stage7.tasks[index].connectBoard);
          setInputEndDate(coaching.stage7.tasks[index].endTime.toString());
          break;
        case '8': 
          setInputName(coaching.stage8.tasks[index].name);
          setInputStatus(coaching.stage8.tasks[index].status);
          setInputConnectBoard(coaching.stage8.tasks[index].connectBoard);
          setInputEndDate(coaching.stage8.tasks[index].endTime.toString());
          break;
        case '9': 
          setInputName(coaching.stage9.tasks[index].name);
          setInputStatus(coaching.stage9.tasks[index].status);
          setInputConnectBoard(coaching.stage9.tasks[index].connectBoard);
          setInputEndDate(coaching.stage9.tasks[index].endTime.toString());
          break; 
        case '10': 
          setInputName(coaching.stage10.tasks[index].name);
          setInputStatus(coaching.stage10.tasks[index].status);
          setInputConnectBoard(coaching.stage10.tasks[index].connectBoard);
          setInputEndDate(coaching.stage10.tasks[index].endTime.toString());
          break;                
        default: break;  
      } 
    }
  }, [isSkeletonUpdated]);




  const handleEndDateChange = (date) => {
    
     setInputEndDate(date);

    switch(stageNumber){
      case '1': coaching.stage1.tasks[index].endTime = date; break;
      case '2': coaching.stage2.tasks[index].endTime = date; break;
      case '3': coaching.stage3.tasks[index].endTime = date; break;
      case '4': coaching.stage4.tasks[index].endTime = date; break;
      case '5': coaching.stage5.tasks[index].endTime = date; break;
      case '6': coaching.stage6.tasks[index].endTime = date;  break;
      case '7': coaching.stage7.tasks[index].endTime = date;  break;
      case '8': coaching.stage8.tasks[index].endTime = date;  break;
      case '9': coaching.stage9.tasks[index].endTime = date;  break;
      case '10': coaching.stage10.tasks[index].endTime = date;  break;
      default: break;
     }
     updateDB();
  };



  return(
    <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      
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
            case '1': coaching.stage1.tasks[index].name = val;  break;
            case '2': coaching.stage2.tasks[index].name  = val; break;
            case '3': coaching.stage3.tasks[index].name  = val; break;
            case '4': coaching.stage4.tasks[index].name  = val; break;
            case '5':  coaching.stage5.tasks[index].name  = val; break;
            case '6': coaching.stage6.tasks[index].name  = val; break;
            case '7': coaching.stage7.tasks[index].name  = val; break;
            case '8': coaching.stage8.tasks[index].name  = val; break;
            case '9': coaching.stage9.tasks[index].name  = val; break;
            case '10': coaching.stage10.tasks[index].name  = val; break;
            default: break;
            }
            updateDB();
            }}  
          /> 
    </th>
    <td className="px-6 py-4">
      <FontAwesomeIcon icon={faComment }  size="xl"  style={{color:'#FFD700'}}/>
    </td>
    <td className="px-6 py-4" >
    <span onClick={setTaskStatus}>
      {inputStatus}

    </span>
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
     <DatePicker className='flex' dateFormat="dd/MM/yyyy" selected={new Date(inputEndDate)}  onChange={(date) => handleEndDateChange(date)}  minDate={new Date()} />
    </td>
    <td className="px-6 py-4 text-center">
      <FontAwesomeIcon icon={faUserCircle }  size="xl" style={{color:'#008B8B'}} />
    </td>
    <td className="px-6 py-4">
      
    <input
      className='border'
      type="text"
      value={inputConnectBoard}
      onChange={(event)=>{
          setInputConnectBoard (event.target.value);
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
                case '1': coaching.stage1.tasks[index].connectBoard = val;  break;
                case '2': coaching.stage2.tasks[index].connectBoard  = val; break;
                case '3': coaching.stage3.tasks[index].connectBoard  = val; break;
                case '4': coaching.stage4.tasks[index].connectBoard  = val; break;
                case '5':  coaching.stage5.tasks[index].connectBoard  = val; break;
                case '6': coaching.stage6.tasks[index].connectBoard  = val; break;
                case '7': coaching.stage7.tasks[index].connectBoard  = val; break;
                case '8': coaching.stage8.tasks[index].connectBoard  = val; break;
                case '9': coaching.stage9.tasks[index].connectBoard  = val; break;
                case '10': coaching.stage10.tasks[index].connectBoard  = val; break;
                default: break;
               }
               updateDB();
             }}  
             />

    </td>
    <td className="px-6 py-4 text-center">
      <FontAwesomeIcon   icon={faFileCode }  size="xl" style={{color:'#DC143C'}}/>
    </td>
  </tr>
  );
}

export default Task