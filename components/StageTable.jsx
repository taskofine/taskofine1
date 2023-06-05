'use client'
import {useState, useEffect} from 'react'
import Stage from './Stage';
 
const StageTable = ({stageNumber, amIAdmin,toggleTasks,openedTasks,setOpenedTasks, updateDB,listTrainees, indexRenderedTasks, setIndexRenderedTasks, isSkeletonUpdated, coach}) => {




 
  const handleChangeSearchTrainees = (text) => {
    console.log("aaaaaaaaaaaaa="  + text.target.value);
  }
 
  return (
    <table  className="rtl-table w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <tbody>
      <Stage stageNumber={stageNumber} amIAdmin={amIAdmin} listTrainees={listTrainees} toggleTasks={toggleTasks} openedTasks={openedTasks} setOpenedTasks={setOpenedTasks} updateDB={updateDB} isSkeletonUpdated={isSkeletonUpdated} coach={coach}/>
    </tbody>
  </table>
        );
      }


export default StageTable