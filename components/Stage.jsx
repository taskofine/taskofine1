'use client'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserCircle, faFileCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {useSession} from "next-auth/react";
import coaching  from '../utils/skeletonCoaching';
import DatePickerRange from './DatePickerRange';
import Image from 'next/image';
import ChatPage from '../app/chat/page';
import Link from 'next/link';

/////

let countedStages = [];

const Stage = ({stageNumber, amIAdmin, listTrainees, toggleTasks, openedTask,setOpenedTask,updateDB, isSkeletonUpdated}) => {
 
  const {data: session} = useSession();
  const router = useRouter();
  
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

  const [tasksOpen, setTasksOpen] = useState(false);
  const [inputPlannedTimeValue, setInputPlannedTimeValue] = useState("0"); 
  const [inputDurationInDays,setInputDurationInDays] = useState("0");
  const [inputLastStage, setInputLastStage] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputTrainees, setInputTrainees] = useState([]);
  const [inputSearchTrainees, setInputSearchTrainees] = useState("");
  const [inputStartPeriod, setInputStartPeriod] = useState(null);
  const [inputEndPeriod, setInputEndPeriod] = useState(null);
  const [listSuggestedTraineees, setListSuggestedTrainees] = useState([]);
  const [listSelectedTraineees, setListSelectedTrainees] = useState([]);
 
  
  let name='';
  let status='';
  let trainees=[];
  let lastStage='';
  let durationInDays='';
  let plannedTimeInHours='';

  
  
   useEffect(()=>{   
    if(!isSkeletonUpdated) return;  
    if(!countedStages.includes(stageNumber)){
      countedStages.push(stageNumber);
      setListSuggestedTrainees(listTrainees);
      switch(stageNumber){
        case '1': 
          setInputPlannedTimeValue(coaching.stage1.plannedTimeInHours);  
          setInputDurationInDays(coaching.stage1.durationInDays);
          setInputLastStage(coaching.stage1.lastStage);
          setInputStatus(coaching.stage1.status);
          setInputName(coaching.stage1.name);
          setInputTrainees(coaching.stage1.trainees);
          setInputStartPeriod(coaching.stage1.startPeriod);
          setInputEndPeriod(coaching.stage1.endPeriod);
          
          break;
        case '2': 
          setInputPlannedTimeValue(coaching.stage2.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage2.durationInDays);
          setInputLastStage(coaching.stage2.lastStage);
          setInputStatus(coaching.stage2.status);
          setInputName(coaching.stage2.name);
          setInputTrainees(coaching.stage2.trainees);
          setInputStartPeriod(coaching.stage2.startPeriod);
          setInputEndPeriod(coaching.stage2.endPeriod);
          break;
        case '3': 
          setInputPlannedTimeValue(coaching.stage3.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage3.durationInDays);
          setInputLastStage(coaching.stage3.lastStage);
          setInputStatus(coaching.stage3.status);
          setInputName(coaching.stage3.name);
          setInputTrainees(coaching.stage3.trainees);
          setInputStartPeriod(coaching.stage3.startPeriod);
          setInputEndPeriod(coaching.stage3.endPeriod);
          break;
        case '4': 
          setInputPlannedTimeValue(coaching.stage4.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage4.durationInDays);
          setInputLastStage(coaching.stage4.lastStage);
          setInputStatus(coaching.stage4.status);
          setInputName(coaching.stage4.name);
          setInputTrainees(coaching.stage4.trainees);
          setInputStartPeriod(coaching.stage4.startPeriod);
          setInputEndPeriod(coaching.stage4.endPeriod);
          break;
        case '5': 
          setInputPlannedTimeValue(coaching.stage5.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage5.durationInDays);
          setInputLastStage(coaching.stage5.lastStage);
          setInputStatus(coaching.stage5.status);
          setInputName(coaching.stage5.name);
          setInputTrainees(coaching.stage5.trainees);
          setInputStartPeriod(coaching.stage5.startPeriod);
          setInputEndPeriod(coaching.stage5.endPeriod);
          break;
        case '6': 
          setInputPlannedTimeValue(coaching.stage6.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage6.durationInDays);
          setInputLastStage(coaching.stage6.lastStage);
          setInputStatus(coaching.stage6.status);
          setInputName(coaching.stage6.name);
          setInputTrainees(coaching.stage6.trainees);
          setInputStartPeriod(coaching.stage6.startPeriod);
          setInputEndPeriod(coaching.stage6.endPeriod);
          break;
        case '7': 
          setInputPlannedTimeValue(coaching.stage7.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage7.durationInDays);
          setInputLastStage(coaching.stage7.lastStage);
          setInputStatus(coaching.stage7.status);
          setInputName(coaching.stage7.name);
          setInputTrainees(coaching.stage7.trainees);
          setInputStartPeriod(coaching.stage7.startPeriod);
          setInputEndPeriod(coaching.stage7.endPeriod);
          break;
        case '8': 
          setInputPlannedTimeValue(coaching.stage8.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage8.durationInDays);
          setInputLastStage(coaching.stage8.lastStage);
          setInputStatus(coaching.stage8.status);
          setInputName(coaching.stage8.name);
          setInputTrainees(coaching.stage8.trainees);
          setInputStartPeriod(coaching.stage8.startPeriod);
          setInputEndPeriod(coaching.stage8.endPeriod);
          break;
        case '9': 
          setInputPlannedTimeValue(coaching.stage9.plannedTimeInHours); 
          setInputDurationInDays(coaching.stage9.durationInDays);
          setInputLastStage(coaching.stage9.lastStage);
          setInputStatus(coaching.stage9.status);
          setInputName(coaching.stage9.name);
          setInputTrainees(coaching.stage9.trainees);
          setInputStartPeriod(coaching.stage9.startPeriod);
          setInputEndPeriod(coaching.stage9.endPeriod);
          break;
        case '10': 
        setInputPlannedTimeValue(coaching.stage10.plannedTimeInHours); 
        setInputDurationInDays(coaching.stage10.durationInDays);
        setInputLastStage(coaching.stage10.lastStage);
        setInputStatus(coaching.stage10.status);
        setInputName(coaching.stage10.name);
        setInputTrainees(coaching.stage10.trainees);
        setInputStartPeriod(coaching.stage10.startPeriod);
        setInputEndPeriod(coaching.stage10.endPeriod);
        break;
        default:break;
      }
    
    }  
   },[isSkeletonUpdated]);
   

   const populateStatusInCoaching = (val) => {
    setInputStatus(val);
    switch(stageNumber){
    case '1': coaching.stage1.status=val;  break;
    case '2': coaching.stage2.status=val; break;
    case '3': coaching.stage3.status=val; break;
    case '4': coaching.stage4.status=val; break;
    case '5': coaching.stage5.status=val; break;
    case '6': coaching.stage6.status=val; break;
    case '7': coaching.stage7.status=val; break;
    case '8': coaching.stage8.status=val; break;
    case '9': coaching.stage9.status=val; break;
    case '10': coaching.stage10.status=val; break;
    default: break;
    }
    updateDB();
   }



   const manipulateSuggestedTraineeList = (val) =>{
    setInputSearchTrainees(val);
    const filteredListTrainess = listTrainees.filter((trainee)=>trainee.name.toLowerCase().includes(val.toLowerCase()));
    //setTrainees(filteredListTrainess);
    setListSuggestedTrainees(filteredListTrainess);
   }

   const manipulateSelectedTrainessList= (index) =>{
    console.log("aaaaaaaaaaaa=" + index);
   }


  //getting an index of a trainee in listTrainees & adding it to selected trainees
   const addTraineeToSelectedTrainees = (trainee)=>{ //trainee shows an entire record of  a trainee
    
     //trainee: the complete record of the trainee we wish to add to selectedTrainees
     //inputTrainees: selected trainees
     let arr = inputTrainees;
    !arr.includes(trainee?.email) &&  arr.push(trainee?.email);
    setInputTrainees(arr);
    setIsTraineesOpen(false); 
    switch(stageNumber){
      case '1': coaching.stage1.trainees=arr;  break;
      case '2': coaching.stage2.trainees=arr; break;
      case '3': coaching.stage3.trainees=arr; break;
      case '4': coaching.stage4.trainees=arr; break;
      case '5': coaching.stage5.trainees=arr; break;
      case '6': coaching.stage6.trainees=arr; break;
      case '7': coaching.stage7.trainees=arr; break;
      case '8': coaching.stage8.trainees=arr; break;
      case '9': coaching.stage9.trainees=arr; break;
      case '10': coaching.stage10.trainees=arr; break;
      default: break;
      }
      updateDB();
   }




   const removeTraineeFromSelectedTrainees = (trainee) => {
   
    //trainee is the email of the trainee we wish to remove
    //we use here inputTrainees that holds the selected trainees
    let arr = [];

    inputTrainees.map((train)=>{
      if(train!==trainee){  
        arr.push(train);
      }
    
    });   
    setInputTrainees(arr);
    setIsTraineesOpen(false);
    switch(stageNumber){
      case '1': coaching.stage1.trainees=arr;  break;
      case '2': coaching.stage2.trainees=arr; break;
      case '3': coaching.stage3.trainees=arr; break;
      case '4': coaching.stage4.trainees=arr; break;
      case '5': coaching.stage5.trainees=arr; break;
      case '6': coaching.stage6.trainees=arr; break;
      case '7': coaching.stage7.trainees=arr; break;
      case '8': coaching.stage8.trainees=arr; break;
      case '9': coaching.stage9.trainees=arr; break;
      case '10': coaching.stage10.trainees=arr; break;
      default: break;
      }
      updateDB();
   }
   
 
   

  return  inputStartPeriod && inputEndPeriod &&(
    <tr key="key_tr"  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <span onClick={() => toggleTasks(stageNumber)} className='ml-2'>
          <FontAwesomeIcon icon={faArrowDown } size="xl" style={{color:'#000000'}}/>
        </span>
          
        <input 
               className='border'
               readOnly={amIAdmin?false:true}
               type="text"
               value={inputName}
               onChange={(event)=>{
                 setInputName (event.target.value);
               }}
               onKeyDown={(event)=>{
                 if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                   event.preventDefault();
                 }
               }
             }
             onBlur={(event)=> {
               const val = event.target.value; 
               
               switch(stageNumber){
                case '1': coaching.stage1.name = val;  break;
                case '2': coaching.stage2.name  = val; break;
                case '3': coaching.stage3.name  = val; break;
                case '4': coaching.stage4.name  = val; break;
                case '5':  coaching.stage5.name  = val; break;
                case '6': coaching.stage6.name  = val; break;
                case '7': coaching.stage7.name  = val; break;
                case '8': coaching.stage8.name  = val; break;
                case '9': coaching.stage9.name  = val; break;
                case '10': coaching.stage10.name  = val; break;
                default: break;
               }
               updateDB();
             }}  
             />

      </td>



      <td className="px-6 py-4">
        <Link href={'/chat'} onClick={()=> router.replace(router.asPath)  }>
          <FontAwesomeIcon icon={faComment } size="xl" style={{color:'#FFD700'}}/>  
        </Link>
        
      </td>
      <td className="px-6 py-4" onClick={amIAdmin?setStatus:null} >
        <div className='bg-white'>
          {(inputStatus==="חדש" || status) && <p className='bg-orange-400 px-8 py-2 rounded-lg my-1'>חדש</p>}
          {(inputStatus==="בוצע" || status) && <p className='bg-green-400 px-8 py-2 rounded-lg my-1'>בוצע</p>}
          {(inputStatus==="סגור" || status) && <p className='bg-gray-400 px-8 py-2 rounded-lg my-1'>סגור</p>}
        </div>
          {isStatusOpen &&(<hr className='h-[5px]'/>)} 
          {isStatusOpen && (
            <div className='bg-white'>
              <p className='bg-orange-400 px-8 py-2 rounded-lg my-1' onClick={()=>{const val = "חדש";populateStatusInCoaching(val);}}>חדש</p>       
              <p className='bg-green-400 px-8 py-2 rounded-lg my-1' onClick={()=>{const val = "בוצע";populateStatusInCoaching(val);}}>בוצע</p>      
              <p className='bg-gray-400 px-8 py-2 rounded-lg my-1' onClick={()=>{const val = "סגור";populateStatusInCoaching(val);}  } >סגור</p>
            </div>
            )}
      </td>
      <td className="px-6 py-4" onClick={setTimetable}>
     
      <DatePickerRange   stageNumber={stageNumber} amIAdmin={amIAdmin} updateDB={updateDB}  startPeriod={inputStartPeriod}  endPeriod={inputEndPeriod}/>

      </td>
      <td className="px-6 py-4" >
        <FontAwesomeIcon icon={faUserCircle } size="xl" style={{color:'#008B8B'}} onClick={setTrainees} />
          {isTraineesOpen && (
          <div className='bg-slate-500 flex flex-col justify-center p-3 relative left-20 top-2'>
            {amIAdmin &&(
              <>
              <input type="text" 
                value={inputSearchTrainees}  
                onChange={(val) => manipulateSuggestedTraineeList(val.target.value)}
                onKeyDown={(event)=>{
                if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                event.preventDefault();
                }
              }} 
              placeholder='חיפוש מתאמנים' 
              className="border border-gray-300 m-1 px-2 py-2 rounded-md w-25"
              />
              <p className='my-1 mx-2 text-white'>המלצות:</p>
              <div >
                {listSuggestedTraineees.map((trainee,index)=>{
                  return <p key={index} className='text-white flex mb-2' onClick={(trainees)=>{ addTraineeToSelectedTrainees(trainee)}}>
                    <Image src={trainee.image} alt="Description of the image" width={32} height={32} className='border rounded-full ml-2'/>
                    {trainee.name}
                 </p>
                })} 
              </div>
              </>
            )}
     
            
         
     
            <p className='my-1 mx-2 text-white'>משתתפים:</p>
            <div >
              {inputTrainees.map((trainee,index)=>{   
                
                //we locate this trainee in listTrainees, in order to retreive his image + name
                let image;  let name;
                listTrainees.map((item)=>{ 
                    if(item.email===trainee){
                      image = item?.image;
                      name = item?.name;
                    }
                  });
                return <p key={index} className={`text-white flex mb-2 justify-between` } onClick={()=>manipulateSelectedTrainessList(index)}>
                  <Image src={image} alt="Description of the image" width={32} height={32} className='border rounded-full ml-2'/>
                  {name}
                  {amIAdmin && <span onClick={()=> removeTraineeFromSelectedTrainees(trainee)}>X</span>}
               </p>
              })} 
            </div>
          </div>
            )}
          </td>
          <td className="px-6 py-4">  
            <input
               readOnly={amIAdmin?false:true}
               className='border'
               type="text"
               value={inputLastStage}
               onChange={(event)=>{
                 setInputLastStage(event.target.value);
               }}
               onKeyDown={(event)=>{
                 if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                   event.preventDefault();
                 }
               }
             }
             onBlur={(event)=> {
               const val = event.target.value; 
               switch(stageNumber){
                 case '1': coaching.stage1.lastStage  = val;  break;
                 case '2': coaching.stage2.lastStage  = val; break;
                 case '3': coaching.stage3.lastStage  = val; break;
                 case '4': coaching.stage4.lastStage  = val; break;
                 case '5':  coaching.stage5.lastStage  = val; break;
                 case '6': coaching.stage6.lastStage  = val; break;
                 case '7': coaching.stage7.lastStage  = val; break;
                 case '8': coaching.stage8.lastStage  = val; break;
                 case '9': coaching.stage9.lastStage  = val; break;
                 case '10': coaching.stage10.lastStage  = val; break;
                 default: break;
                }
                updateDB();
               }}  
             />
           </td>
           <td className="px-6 py-4">
           <input
              readOnly={amIAdmin?false:true}
               className='border'
               type="text"
               value={inputDurationInDays}
               onChange={(event)=>{
                 setInputDurationInDays(event.target.value);
               }}
               onKeyDown={(event)=>{
                 if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                   event.preventDefault();
                 }
               }
             }
             onBlur={(event)=> {
               const val = event.target.value; 
               
               switch(stageNumber){
                case '1': coaching.stage1.durationInDays = val;  break;
                case '2': coaching.stage2.durationInDays  = val; break;
                case '3': coaching.stage3.durationInDays  = val; break;
                case '4': coaching.stage4.durationInDays  = val; break;
                case '5':  coaching.stage5.durationInDays  = val; break;
                case '6': coaching.stage6.durationInDays  = val; break;
                case '7': coaching.stage7.durationInDays  = val; break;
                case '8': coaching.stage8.durationInDays  = val; break;
                case '9': coaching.stage9.durationInDays  = val; break;
                case '10': coaching.stage10.durationInDays  = val; break;
                default: break;
               }
               updateDB();
             }}  
             />
           </td>
           <td className="px-6 py-4">
           
           <input
               readOnly={amIAdmin?false:true}
               className='border'
               type="text"
               value={inputPlannedTimeValue}
               onChange={(event)=>{
                 setInputPlannedTimeValue(event.target.value);
               }}
               onKeyDown={(event)=>{
                 if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                   event.preventDefault();
                 }
               }
             }
             onBlur={(event)=> {
               const val = event.target.value; 
               
               switch(stageNumber){
                case '1': coaching.stage1.plannedTimeInHours = val;  break;
                case '2': coaching.stage2.plannedTimeInHours = val; break;
                case '3': coaching.stage3.plannedTimeInHours = val; break;
                case '4': coaching.stage4.plannedTimeInHours = val; break;
                case '5':  coaching.stage5.plannedTimeInHours = val; break;
                case '6': coaching.stage6.plannedTimeInHours = val; break;
                case '7': coaching.stage7.plannedTimeInHours = val; break;
                case '8': coaching.stage8.plannedTimeInHours = val; break;
                case '9': coaching.stage9.plannedTimeInHours = val; break;
                case '10': coaching.stage10.plannedTimeInHours = val; break;
                default: break;
               }
               updateDB();
             }}  
             />
           </td>
         </tr> 
         );
        } 


export default Stage
