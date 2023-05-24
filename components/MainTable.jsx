
'use client'
import TaskTable from './TaskTable';
import StageTable from './StageTable';
import {useState, useEffect} from 'react'

const MainTable = () => {

  const [openedTask, setOpenedTask]  = useState('-1');
  const toggleTasks = (stageNumber) =>{
   //if this task is already opened
   if(openedTask===stageNumber){
    setOpenedTask('-1');
   }else{
    setOpenedTask(stageNumber);
   }
  }

  return (
  <div className='my-5 relative' dir="rtl">
    <div className="overflow-x-auto">  
      <StageTable stageNumber="1" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask}/>
      {openedTask==='1' && <TaskTable stageNumber="1"/>}
      <StageTable stageNumber="2" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask}/>
      {openedTask==='2' && <TaskTable stageNumber="2"/>}
      <StageTable stageNumber="3" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask}/>
      {openedTask==='3' && <TaskTable stageNumber="3"/>}
      <StageTable stageNumber="4" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask}/>
      {openedTask==='4' && <TaskTable stageNumber="4"/>}
      <StageTable stageNumber="5" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask}/>
      {openedTask==='5' && <TaskTable stageNumber="5"/>}
      <StageTable stageNumber="6" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask}/>
      {openedTask==='6' && <TaskTable stageNumber="6"/>}
      <StageTable stageNumber="7" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask}/>
      {openedTask==='7' && <TaskTable stageNumber="7"/>}
      <StageTable stageNumber="8" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask}/>
      {openedTask==='8' && <TaskTable stageNumber="8"/>}
      <StageTable stageNumber="9" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask}/>
      {openedTask==='9' && <TaskTable stageNumber="9"/>}
      <StageTable stageNumber="10" toggleTasks={toggleTasks} openedTasks={openedTask} setOpenedTasks={setOpenedTask}/>
      {openedTask==='10' && <TaskTable stageNumber="10"/>} 
    </div>
  </div>  
  )
}

export default MainTable
