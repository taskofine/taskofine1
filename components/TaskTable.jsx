'use client'
import React,{useState, useEffect} from 'react'
import coaching  from '../utils/skeletonCoaching';
import Task from './Task';

const TaskTable = ({stageNumber, amIAdmin, updateDB, listTrainees, indexRenderedTasks, setIndexRenderedTasks, isSkeletonUpdated,coach}) =>{  
 
  
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
      
    let temp; 
    return /*stageNumber===openedTask*/ 4>3 ?
      (
        <div className="relative overflow-x-auto mr-7 mt-5" >
          <table   className="rtl-table w-full text-sm text-left text-gray-500 ">
              <tbody>
                { 
                  relevantStage.tasks.map((item,index)=>{ 
                  //console.log("ggggggggggggg=" + stageNumber +  " " + JSON.stringify(coach.stage2.tasks[index].trainees));  
                  if(stageNumber==='1')  return <Task  key={index} stageNumber={stageNumber} amIAdmin={amIAdmin} index={index} updateDB={updateDB} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} listTrainees={listTrainees} coach={coach} inputTraineesSpecific={coach.stage1.tasks[index].trainees} />  
                  else if(stageNumber==='2')  {  return <Task  key={index} stageNumber={stageNumber} amIAdmin={amIAdmin} index={index} updateDB={updateDB} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} listTrainees={listTrainees} coach={coach} inputTraineesSpecific={coach.stage2.tasks[index].trainees} /> }
                  else if(stageNumber==='3')  return <Task  key={index} stageNumber={stageNumber} amIAdmin={amIAdmin} index={index} updateDB={updateDB} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} listTrainees={listTrainees} coach={coach} inputTraineesSpecific={coach.stage3.tasks[index].trainees} />  
                  else if(stageNumber==='4')  return <Task  key={index} stageNumber={stageNumber} amIAdmin={amIAdmin} index={index} updateDB={updateDB} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} listTrainees={listTrainees} coach={coach} inputTraineesSpecific={coach.stage4.tasks[index].trainees} />  
                  else if(stageNumber==='5')  return <Task  key={index} stageNumber={stageNumber} amIAdmin={amIAdmin} index={index} updateDB={updateDB} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} listTrainees={listTrainees} coach={coach} inputTraineesSpecific={coach.stage5.tasks[index].trainees} />  
                  else if(stageNumber==='6')  return <Task  key={index} stageNumber={stageNumber} amIAdmin={amIAdmin} index={index} updateDB={updateDB} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} listTrainees={listTrainees} coach={coach} inputTraineesSpecific={coach.stage6.tasks[index].trainees} />  
                  else if(stageNumber==='7')  return <Task  key={index} stageNumber={stageNumber} amIAdmin={amIAdmin} index={index} updateDB={updateDB} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} listTrainees={listTrainees} coach={coach} inputTraineesSpecific={coach.stage7.tasks[index].trainees} />  
                  else if(stageNumber==='8')  return <Task  key={index} stageNumber={stageNumber} amIAdmin={amIAdmin} index={index} updateDB={updateDB} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} listTrainees={listTrainees} coach={coach} inputTraineesSpecific={coach.stage8.tasks[index].trainees} />  
                  else if(stageNumber==='9')  return <Task  key={index} stageNumber={stageNumber} amIAdmin={amIAdmin} index={index} updateDB={updateDB} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} listTrainees={listTrainees} coach={coach} inputTraineesSpecific={coach.stage9.tasks[index].trainees} />  
                  else if(stageNumber==='10')  return <Task  key={index} stageNumber={stageNumber} amIAdmin={amIAdmin} index={index} updateDB={updateDB} indexRenderedTasks={indexRenderedTasks} setIndexRenderedTasks={setIndexRenderedTasks} isSkeletonUpdated={isSkeletonUpdated} listTrainees={listTrainees} coach={coach} inputTraineesSpecific={coach.stage10.tasks[index].trainees} />                        
                 }) 
                }
              </tbody>
            </table>
          </div>
        ) : (<></>) 
      }

    
export default TaskTable