'use client'
import {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserCircle, faFileCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import DateSelector from '../components/DateSelector';
import {useSession} from "next-auth/react";
import coaching  from '../utils/skeletonCoaching';


const Task = ({stageNumber,index}) => {
  let name='';
  let status='';
  let trainees = [];
  let connectBoard='';
  let files=[];

  const [isTaskStatusOpen, setIsTaskStatusOpen] = useState(false);
  const setTaskStatus = () => {
  
    setIsTaskStatusOpen(!isTaskStatusOpen);
  }

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

export default Task