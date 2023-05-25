'use client'
import React,{useState, useEffect} from 'react'
import coaching  from '../utils/skeletonCoaching';
import Task from './Task';

const TaskTable = ({stageNumber, updateDB, listTrainees}) =>{  

  let openedTask='3';
     let relevantStage;
    switch(stageNumber){
      case '1':  relevantStage=coaching.stage1; break;
      case '2':  relevantStage=coaching.stage2; break;
      case '3':  relevantStage=coaching.stage3; break;
      case '4':  relevantStage=coaching.stage4; break;
      case '5':  relevantStage=coaching.stage5; break;
      case '6':  relevantStage=coaching.stage6; break;
      case '7':  relevantStage=coaching.stage7; break;
      case '8':  relevantStage=coaching.stage8; break;
      case '9':  relevantStage=coaching.stage9; break;
      case '10':  relevantStage=coaching.stage10; break;
    }
      
    return /*stageNumber===openedTask*/ 4>3 ?
      (
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
                {   
                  relevantStage.tasks.map((item,index)=>{  
                   return <Task stageNumber={stageNumber} index={index}/>
                 }) 
                }
              </tbody>
            </table>
          </div>
        ) : (<></>) 
      }

    
export default TaskTable