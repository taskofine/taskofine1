
import TaskTable from './TaskTable';
import StageTable from './StageTable';

const MainTable = () => {
  return (
  <div className='my-5 relative' dir="rtl">
    <div className="overflow-x-auto">  
      <StageTable stageNumber="1"/>
      <TaskTable stageNumber="1"/>
      <StageTable stageNumber="2"/>
      <TaskTable stageNumber="2"/>
      <StageTable stageNumber="3"/>
      <TaskTable stageNumber="3"/>
      <StageTable stageNumber="4"/>
      <TaskTable stageNumber="4"/>
      <StageTable stageNumber="5"/>
      <TaskTable stageNumber="5"/>
      <StageTable stageNumber="6"/>
      <TaskTable stageNumber="6"/>
      <StageTable stageNumber="7"/>
      <TaskTable stageNumber="7"/>
      <StageTable stageNumber="8"/>
      <TaskTable stageNumber="8"/>
      <StageTable stageNumber="9"/>
      <TaskTable stageNumber="9"/>
      <StageTable stageNumber="10"/>
      <TaskTable stageNumber="10"/>
    </div>
  </div>  
  )
}

export default MainTable
