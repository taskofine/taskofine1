'use client'
import {useState} from 'react'
import { Table } from 'react-bootstrap';

const TaskTable = () => {
  const [tasksOpen, setTasksOpen] = useState(false);
  const toggleTasks = () =>{  
   tasksOpen? setTasksOpen(false) : setTasksOpen(true);
  }

  return (
  <div className='my-5'>
    <div className="relative overflow-x-visible">
      <table responsive className="rtl-table w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
          <tr onClick={toggleTasks} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            שלב 1 - בניית תכנית עסקית
            </th>
            <td className="px-6 py-4">
              סמליל צ'ט
            </td>
            <td className="px-6 py-4">
             סגור
            </td>
            <td className="px-6 py-4">
             1-7 June
            </td>
            <td className="px-6 py-4">
              performer icon
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
        <div className="relative overflow-x-auto mr-7" >
        <table  responsive className="rtl-table w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
               סמליל צ'ט
              </td>
              <td className="px-6 py-4">
              משימה חדשה
              </td>
              <td className="px-6 py-4">
               01-06-2023
              </td>
              <td className="px-6 py-4">
                סמליל המבצע
              </td>
              <td className="px-6 py-4">
                ""
              </td>
              <td className="px-6 py-4">
                סמליל קבצים
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
