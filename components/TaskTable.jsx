'use client'
import {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserCircle, faFileCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import DateSelector from '../components/DateSelector';
import {useSession} from "next-auth/react";

const TaskTable = () => {
  const {data: session} = useSession();
  let amIAdmin = false;
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


  const validateAdmin = () => {
    listTrainees.map((item)=>{
      //finding myseld on the list of users
      if(item.email === session?.user?.email){
        amIAdmin = item.isAdmin;
        console.log("rrrrrrrrrrrr=" + amIAdmin);
      }
    });
  } 
 

  useEffect(()=>{
   retreiveUsers();
  }, []);
  

  useEffect(()=>{
    validateAdmin();
  }, [listTrainees]);


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
              אין
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
              <td className="px-6 py-4" >
              <span onClick={setTaskStatus}>משימה חדשה</span>
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
