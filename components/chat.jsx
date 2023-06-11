import {useState,useEffect} from 'react'

const chat = ({coach,amIAdmin,updateDB}) => {
    
  // useStates///////////////////////////////////////////////////////////////////////
  const [inputMessage, setInputMessage] = useState("");
  const [chatContents, setChatContents] = useState([]);
  const [newMessageSaved, setNewMessageSaved] = useState(false);
  //useEffects///////////////////////////////////////////////////////////////////////
  useEffect(()=>{
    setNewMessageSaved(false);
   setChatContents(coach.chat);
  }, [newMessageSaved]);


  ////functions////////////////////////////////////////////////////////////////////
  const handleMessageChange = (val)=>{
    setInputMessage(val);
  }
  
  const handleSendButtonClicked = ()=>{    
      let arr = chatContents;
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString();
      const formattedTime = currentDate.toLocaleTimeString();
      const newMessage = {
        isAdmin: amIAdmin,
        message:inputMessage,
        date:formattedDate,
        time:formattedTime
      }
      arr.push(newMessage);
      coach.chat = arr;
      updateDB();
      setNewMessageSaved(true);
  }

  ////////////////////////////////////////////////////////////////////////////////
  return (
    <div   style={{ backgroundImage: 'url("/assets/images/chat.jpg")' }} className='flex flex-col    border-4 border-gray-500 border-dashed  absolute h-[400px] w-[300px]  md:h-[400px] md:w-[500px] right-5 md:right-[0px] z-20 text-white rounded-xl '>
    <div className="flex-grow">
       {
         chatContents.map((m)=>(
           m.isAdmin==="true" ? 
             <div>
               <p className="mb-8 mr-2 mt-4">
                 <span className=" bg-gray-100  rounded-md text-black p-2">{m.message}</span> 
               </p>
               <p className="">
                 <span className=" bg-gray-100  rounded-md text-black p-2">{m.date} {m.time}</span> 
               </p>
             </div>  
           :
             <div>
               <p className="mr-10 mt-4">
                 <span className="bg-green-300 rounded-md text-black p-2">{m.message}</span>
                 <span className="bg-green-300 rounded-md text-gray-400 p-2 text-xs">{m.date} {m.time}</span>
               </p>
            
             </div>
        ))
      }
    </div>

    
    <div className=" mt-auto mb-2  bg-gray-200  flex h-10 ">
      <input
       type="text"
       value={inputMessage}
       onChange={(event) => handleMessageChange(event.target.value)}
       placeholder="כתבו כאן..."
       className="bg-white  text-gray-800 p-2 rounded-lg flex-grow outline-none "
      />
      <button
       onClick={handleSendButtonClicked}
       className="bg-blue-500 text-white  rounded-lg p-2 "
      >
       שליחה
      </button>
   </div>
 </div>
  )
}

export default chat
