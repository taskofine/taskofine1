'use client'
import React,{useState, useEffect} from 'react'
import coaching  from '../utils/skeletonCoaching';
import Task from './Task';

const TaskTable = ({stageNumber, amIAdmin, updateDB, listTrainees, indexRenderedTasks, setIndexRenderedTasks, isSkeletonUpdated}) =>{  
 


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
              <tbody>
                {   
                  relevantStage.tasks.map((item,index)=>{  
                   return <Task  key={index} stageNumber={stageNumber} amIAdmin={amIAdmin} index={index} updateDB={updateDB} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} listTrainees={listTrainees}/>
                 }) 
                }
              </tbody>
            </table>
          </div>
        ) : (<></>) 
      }

    
export default TaskTable