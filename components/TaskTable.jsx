'use client'
import {useState} from 'react'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserCircle, faFileCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import DateSelector from '../components/DateSelector';

const TaskTable = () => {
  const [tasksOpen, setTasksOpen] = useState(false);
  const toggleTasks = () =>{  
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
 


  return (
  <div className='my-5 relative' dir="rtl">
    <div className="overflow-x-auto">
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
          <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <span onClick={toggleTasks} className='ml-2'>
              <FontAwesomeIcon icon={faArrowDown } size="xl" style={{color:'#000000'}}/>
            </span>
            שלב 1 - בניית תכנית עסקית
            </td>
            <td className="px-6 py-4">
              <FontAwesomeIcon icon={faComment } size="xl" style={{color:'#FFD700'}}/>
            </td>
            <td className="px-6 py-4" onClick={setStatus} >
             סגור
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
            <td className="px-6 py-4">
              <FontAwesomeIcon icon={faUserCircle } size="xl" style={{color:'#008B8B'}}/>
            </td>
            <td className="px-6 py-4">
              שלב 0 
            </td>
            <td className="px-6 py-4">
             7 ימים
            </td>
            <td className="px-6 py-4">
              12 שעות
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {tasksOpen && (
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
            <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              א. למלא קובץ (בזמן הפגישה עם אלחי)
              </th>
              <td className="px-6 py-4">
                <FontAwesomeIcon icon={faComment }  size="xl"  style={{color:'#FFD700'}}/>
              </td>
              <td className="px-6 py-4">
              משימה חדשה
              </td>
              <td className="px-6 py-4">
               01-06-2023
              </td>
              <td className="px-6 py-4 text-center">
                <FontAwesomeIcon icon={faUserCircle }  size="xl" style={{color:'#008B8B'}} />
              </td>
              <td className="px-6 py-4">
                ""
              </td>
              <td className="px-6 py-4 text-center">
                <FontAwesomeIcon   icon={faFileCode }  size="xl" style={{color:'#DC143C'}}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    )}
  
  </div>  


  )
}

export default TaskTable
