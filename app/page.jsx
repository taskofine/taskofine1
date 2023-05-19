import TaskTable from "../components/TaskTable";

const Home = () => {
  return (
    <section className="flex w-full flex-col">
      <h1 className='text-center font-extrabold text-5xl'>טבלת שלבים ומשימות</h1>
      <div className="w-full">
        <TaskTable/>
      </div>
      
    </section>
  )
}

export default Home
