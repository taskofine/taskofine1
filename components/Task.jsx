'use client'
import {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUserCircle, faFileCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {useSession} from "next-auth/react";
import coaching  from '../utils/skeletonCoaching';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
//import { Document, Page } from 'react-pdf';


const Task = ({stageNumber, amIAdmin,index, updateDB, indexRenderedTasks, setIndexRenderedTasks, isSkeletonUpdated, listTrainees}) => {
  let name='';
  let status='';
  let trainees = [];
  let connectBoard='';
  let files=[];

  const [isTaskStatusOpen, setIsTaskStatusOpen] = useState(false);
  const setTaskStatus = () => {
  
    setIsTaskStatusOpen(!isTaskStatusOpen);
  }
  
  const [inputConnectBoard, setInputConnectBoard] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [inputEndDate, setInputEndDate] = useState(new Date());
  const [inputTrainees, setInputTrainees] = useState("");
  const [listSuggestedTraineees, setListSuggestedTrainees] = useState([]);
  const [listSelectedTraineees, setListSelectedTrainees] = useState([]);
  const [inputSearchTrainees, setInputSearchTrainees] = useState("");
  const [inputFiles, setInputFiles] = useState([]);
  const [isFileOpen, setIsFileOpen]  = useState(false);
  const setFile = () =>{
    setIsFileOpen(!isFileOpen);
  }
  const [isTraineesOpen, setIsTraineesOpen] = useState(false);
  const setTrainees =  () =>  {
    setIsTraineesOpen(!isTraineesOpen);
  }

  useEffect(()=>{
    if(!(indexRenderedTasks.includes(index))){
      //updating indexRenderedTasks to hold also this index
      setListSuggestedTrainees(listTrainees);
      let arr = indexRenderedTasks;
      arr.push(index);
      setIndexRenderedTasks(arr);
      switch(stageNumber){
        case '1': 
          setInputName(coaching.stage1.tasks[index].name);
          setInputStatus(coaching.stage1.tasks[index].status);
          setInputConnectBoard(coaching.stage1.tasks[index].connectBoard);
          setInputEndDate(new Date(coaching.stage1.tasks[index].endTime));
          setInputTrainees(coaching.stage1.tasks[index].trainees);
          setInputFiles(coaching.stage1.tasks[index].files);
          break;
        case '2': 
          setInputName(coaching.stage2.tasks[index].name);
          setInputStatus(coaching.stage2.tasks[index].status);
          setInputConnectBoard(coaching.stage2.tasks[index].connectBoard);
          setInputEndDate(new Date(coaching.stage2.tasks[index].endTime));
          setInputTrainees(coaching.stage2.tasks[index].trainees);
          setInputFiles(coaching.stage1.tasks[index].files);
          break;
        case '3': 
          setInputName(coaching.stage3.tasks[index].name);
          setInputStatus(coaching.stage3.tasks[index].status);
          setInputConnectBoard(coaching.stage3.tasks[index].connectBoard);
          setInputEndDate(new Date(coaching.stage3.tasks[index].endTime));
          setInputTrainees(coaching.stage3.tasks[index].trainees);
          setInputFiles(coaching.stage1.tasks[index].files);
          break;
        case '4': 
          setInputName(coaching.stage4.tasks[index].name);
          setInputStatus(coaching.stage4.tasks[index].status);
          setInputConnectBoard(coaching.stage4.tasks[index].connectBoard);
          setInputEndDate(new Date(coaching.stage4.tasks[index].endTime));
          setInputTrainees(coaching.stage4.tasks[index].trainees);
          setInputFiles(coaching.stage1.tasks[index].files);
          break;
        case '5': 
          setInputName(coaching.stage5.tasks[index].name);
          setInputStatus(coaching.stage5.tasks[index].status);
          setInputConnectBoard(coaching.stage5.tasks[index].connectBoard);
          setInputEndDate(new Date(coaching.stage5.tasks[index].endTime));
          setInputTrainees(coaching.stage5.tasks[index].trainees);
          setInputFiles(coaching.stage1.tasks[index].files);
          break; 
        case '6': 
          setInputName(coaching.stage6.tasks[index].name);
          setInputStatus(coaching.stage6.tasks[index].status);
          setInputConnectBoard(coaching.stage6.tasks[index].connectBoard);
          setInputEndDate(new Date(coaching.stage6.tasks[index].endTime));
          setInputTrainees(coaching.stage6.tasks[index].trainees);
          setInputFiles(coaching.stage1.tasks[index].files);
          break;
        case '7': 
          setInputName(coaching.stage7.tasks[index].name);
          setInputStatus(coaching.stage7.tasks[index].status);
          setInputConnectBoard(coaching.stage7.tasks[index].connectBoard);
          setInputEndDate(new Date(coaching.stage7.tasks[index].endTime));
          setInputTrainees(coaching.stage7.tasks[index].trainees);
          setInputFiles(coaching.stage1.tasks[index].files);
          break;
        case '8': 
          setInputName(coaching.stage8.tasks[index].name);
          setInputStatus(coaching.stage8.tasks[index].status);
          setInputConnectBoard(coaching.stage8.tasks[index].connectBoard);
          setInputEndDate(new Date(coaching.stage8.tasks[index].endTime));
          setInputTrainees(coaching.stage8.tasks[index].trainees);
          setInputFiles(coaching.stage1.tasks[index].files);
          break;
        case '9': 
          setInputName(coaching.stage9.tasks[index].name);
          setInputStatus(coaching.stage9.tasks[index].status);
          setInputConnectBoard(coaching.stage9.tasks[index].connectBoard);
          setInputEndDate(new Date(coaching.stage9.tasks[index].endTime));
          setInputTrainees(coaching.stage9.tasks[index].trainees);
          setInputFiles(coaching.stage1.tasks[index].files);
          break; 
        case '10': 
          setInputName(coaching.stage10.tasks[index].name);
          setInputStatus(coaching.stage10.tasks[index].status);
          setInputConnectBoard(coaching.stage10.tasks[index].connectBoard);
          setInputEndDate(new Date(coaching.stage10.tasks[index].endTime));
          setInputTrainees(coaching.stage10.tasks[index].trainees);
          setInputFiles(coaching.stage1.tasks[index].files);
          break;                
        default: break;  
      } 
    }
  }, [isSkeletonUpdated]);




  const handleEndDateChange = (date) => {
    
     setInputEndDate(date);

    switch(stageNumber){
      case '1': coaching.stage1.tasks[index].endTime = date; break;
      case '2': coaching.stage2.tasks[index].endTime = date; break;
      case '3': coaching.stage3.tasks[index].endTime = date; break;
      case '4': coaching.stage4.tasks[index].endTime = date; break;
      case '5': coaching.stage5.tasks[index].endTime = date; break;
      case '6': coaching.stage6.tasks[index].endTime = date;  break;
      case '7': coaching.stage7.tasks[index].endTime = date;  break;
      case '8': coaching.stage8.tasks[index].endTime = date;  break;
      case '9': coaching.stage9.tasks[index].endTime = date;  break;
      case '10': coaching.stage10.tasks[index].endTime = date;  break;
      default: break;
     }
     updateDB();
  };

  

  const populateStatusInCoaching = (val) => {
    setInputStatus(val);
    setIsTaskStatusOpen(false);
    switch(stageNumber){
    case '1': coaching.stage1.tasks[index].status=val;  break;
    case '2': coaching.stage2.tasks[index].status=val; break;
    case '3': coaching.stage3.tasks[index].status=val; break;
    case '4': coaching.stage4.tasks[index].status=val; break;
    case '5': coaching.stage5.tasks[index].status=val; break;
    case '6': coaching.stage6.tasks[index].status=val; break;
    case '7': coaching.stage7.tasks[index].status=val; break;
    case '8': coaching.stage8.tasks[index].status=val; break;
    case '9': coaching.stage9.tasks[index].status=val; break;
    case '10': coaching.stage10.tasks[index].status=val; break;
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
       case '1': coaching.stage1.tasks[index].trainees=arr;  break;
       case '2': coaching.stage2.tasks[index].trainees=arr; break;
       case '3': coaching.stage3.tasks[index].trainees=arr; break;
       case '4': coaching.stage4.tasks[index].trainees=arr; break;
       case '5': coaching.stage5.tasks[index].trainees=arr; break;
       case '6': coaching.stage6.tasks[index].trainees=arr; break;
       case '7': coaching.stage7.tasks[index].trainees=arr; break;
       case '8': coaching.stage8.tasks[index].trainees=arr; break;
       case '9': coaching.stage9.tasks[index].trainees=arr; break;
       case '10': coaching.stage10.tasks[index].trainees=arr; break;
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
       case '1': coaching.stage1.tasks[index].trainees=arr;  break;
       case '2': coaching.stage2.tasks[index].trainees=arr; break;
       case '3': coaching.stage3.tasks[index].trainees=arr; break;
       case '4': coaching.stage4.tasks[index].trainees=arr; break;
       case '5': coaching.stage5.tasks[index].trainees=arr; break;
       case '6': coaching.stage6.tasks[index].trainees=arr; break;
       case '7': coaching.stage7.tasks[index].trainees=arr; break;
       case '8': coaching.stage8.tasks[index].trainees=arr; break;
       case '9': coaching.stage9.tasks[index].trainees=arr; break;
       case '10': coaching.stage10.tasks[index].trainees=arr; break;
       default: break;
       }
       updateDB();
    }


  return(
    <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      
    <input
      readOnly={amIAdmin?false:true}
      className='border'
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
            case '1': coaching.stage1.tasks[index].name = val;  break;
            case '2': coaching.stage2.tasks[index].name  = val; break;
            case '3': coaching.stage3.tasks[index].name  = val; break;
            case '4': coaching.stage4.tasks[index].name  = val; break;
            case '5':  coaching.stage5.tasks[index].name  = val; break;
            case '6': coaching.stage6.tasks[index].name  = val; break;
            case '7': coaching.stage7.tasks[index].name  = val; break;
            case '8': coaching.stage8.tasks[index].name  = val; break;
            case '9': coaching.stage9.tasks[index].name  = val; break;
            case '10': coaching.stage10.tasks[index].name  = val; break;
            default: break;
            }
            updateDB();
            }}  
          /> 
    </th>
    <td className="px-6 py-4">
      <FontAwesomeIcon icon={faComment }  size="xl"  style={{color:'#FFD700'}}/>
    </td>
    <td className="px-6 py-4" >
    <div onClick={setTaskStatus}>
      
      <div className='bg-white flex flex-wrap static w-40'>
        {(inputStatus==="משימה חדשה" || status) && <p className='bg-orange-400 w-40 text-center mt-2 p-2 rounded-md'>משימה חדשה</p>}
        {(inputStatus==="משימה בוצעה" || status) && <p className='bg-green-400 w-40 text-center mt-2 p-2 rounded-md'>משימה בוצעה</p>}
        {(inputStatus==="משימה בבדיקה" || status) && <p className='bg-yellow-400 w-40 text-center mt-2 p-2 rounded-md'>משימה בבדיקה</p>}
        {(inputStatus==="משימה לעריכה" || status) && <p className='bg-red-400 w-40 text-center mt-2 p-2 rounded-md'>משימה לעריכה</p>}
        {(inputStatus==="משימה נערכה" || status) && <p className='bg-pink-400 w-40 text-center mt-2 p-2 rounded-md'>משימה נערכה</p>}
        {(inputStatus==="אלחי תציל אותי" || status) && <p className='bg-orange-600 w-40 text-center mt-2 p-2 rounded-md'>אלחי תציל אותי</p>}
        {(inputStatus==="הושלם בהצלחה" || status) && <p className='bg-purple-600 w-40 text-center mt-2 p-2 rounded-md'>הושלם בהצלחה</p>}
        {(inputStatus==="איחור בהגשה" || status) && <p className='bg-black w-40 text-center mt-2 p-2 rounded-md'>איחור בהגשה</p>}
       </div>
     
    </div>
    -{isTaskStatusOpen &&(<hr className=''/>)} 
    {isTaskStatusOpen && (
       <div className='bg-white flex flex-wrap static w-40'>
         <p className='bg-orange-400 w-40 text-center mt-2 p-2 rounded-md' onClick={()=>{const val = "משימה חדשה"; populateStatusInCoaching(val);}} >משימה חדשה</p>
         <p className='bg-green-400 w-40 text-center mt-2 p-2 rounded-md' onClick={()=>{const val = "משימה בוצעה";  populateStatusInCoaching(val);}} >משימה בוצעה</p>
         <p className='bg-yellow-400 w-40 text-center mt-2 p-2 rounded-md' onClick={()=>{const val = "משימה בבדיקה";  populateStatusInCoaching(val);}} >משימה בבדיקה</p>
         <p className='bg-red-400 w-40 text-center mt-2 p-2 rounded-md' onClick={()=>{const val = "משימה לעריכה"  ;populateStatusInCoaching(val);}} >משימה לעריכה</p>
         <p className='bg-pink-400 w-40 text-center mt-2 p-2 rounded-md' onClick={()=>{const val = "משימה נערכה"  ;populateStatusInCoaching(val);}} >משימה נערכה</p>
         <p className='bg-orange-600 w-40 text-center mt-2 p-2 rounded-md' onClick={()=>{const val = "אלחי תציל אותי";  populateStatusInCoaching(val);}} >אלחי תציל אותי</p>
         <p className='bg-purple-600 w-40 text-center mt-2 p-2 rounded-md' onClick={()=>{const val = "הושלם בהצלחה";   populateStatusInCoaching(val);}} >הושלם בהצלחה</p>
         <p className='bg-black text-white w-40 text-center mt-2 p-2 rounded-md' onClick={()=>{const val = "איחור בהגשה"  ;populateStatusInCoaching(val);}} >איחור בהגשה</p>
       </div>
   )}
    </td>
    <td className="px-6 py-4">
     <DatePicker disabled={amIAdmin?false:true}  className='flex' dateFormat="dd/MM/yyyy" selected={new Date(inputEndDate)}  onChange={(date) => handleEndDateChange(date)}  minDate={new Date()} />
    </td>
    <td className="px-6 py-4 text-center">
      <FontAwesomeIcon icon={faUserCircle }  size="xl" style={{color:'#008B8B'}}  onClick={setTrainees} />
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
          <div>
              {inputTrainees.map((trainee,index)=>{   
                //we locate this trainee in listTrainees, in order to retreive his image + name
                let image;  let name;
                listTrainees.map((item)=>{ 
                    if(item.email===trainee){
                      image = item?.image;
                      name = item?.name;
                    }
                  });
                return <p key={index} className='text-white flex mb-2 justify-between' onClick={()=>manipulateSelectedTrainessList(index)}>
                  <Image src={image} alt="Description of the image" width={32} height={32} className='border rounded-full ml-2'/>
                  {name}
                  <span onClick={()=> removeTraineeFromSelectedTrainees(trainee)}>X</span>
               </p>
              })} 
            </div>  
         </div>    
         
           
            )}
    </td>
    <td className="px-6 py-4">
      
    <input
      className='border'
      type="text"
      value={inputConnectBoard}
      onChange={(event)=>{
          setInputConnectBoard (event.target.value);
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
                case '1': coaching.stage1.tasks[index].connectBoard = val;  break;
                case '2': coaching.stage2.tasks[index].connectBoard  = val; break;
                case '3': coaching.stage3.tasks[index].connectBoard  = val; break;
                case '4': coaching.stage4.tasks[index].connectBoard  = val; break;
                case '5':  coaching.stage5.tasks[index].connectBoard  = val; break;
                case '6': coaching.stage6.tasks[index].connectBoard  = val; break;
                case '7': coaching.stage7.tasks[index].connectBoard  = val; break;
                case '8': coaching.stage8.tasks[index].connectBoard  = val; break;
                case '9': coaching.stage9.tasks[index].connectBoard  = val; break;
                case '10': coaching.stage10.tasks[index].connectBoard  = val; break;
                default: break;
               }
               updateDB();
             }}  
             />

    </td>
    <td className="px-6 py-4 text-center"> 
      {
       inputFiles.map((file)=>{  console.log("aaaaaaaaaaaaa=" + file);
         return( 
            <button   onClick={() => window.open("/assets/files/" + file, "_blank")}>
              <FontAwesomeIcon   icon={faFileCode }  size="xl" style={{color:'#DC143C'}} />
            </button> 
         )
       }) 
      }
    </td>
  </tr>
  );
}

export default Task