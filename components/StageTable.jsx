'use client'
import {useState, useEffect} from 'react'
import Stage from './Stage';
 
const StageTable = ({stageNumber}) => {
  const [listTrainees, setListTrainees] = useState([]);  
  const handleChangeSearchTrainees = (text) => {
    console.log("aaaaaaaaaaaaa="  + text.target.value);
  }
 
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
      <Stage stageNumber={stageNumber} listTrainees={listTrainees}/>
    </tbody>
  </table>
        );
      }


export default StageTable