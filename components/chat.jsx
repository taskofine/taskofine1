import {useState,useEffect} from 'react'

const chat = ({coach}) => {
    
  // useStates///////////////////////////////////////////////////////////////////////
  const [inputMessage, setInputMessage] = useState("");
  const [chatContents, setChatContents] = useState([]);
  //useEffects///////////////////////////////////////////////////////////////////////
  useEffect(()=>{
   setChatContents(coach.chat);
  }, []);


  ////functions////////////////////////////////////////////////////////////////////
  const handleMessageChange = (val)=>{
    setInputMessage(val);
  }
  
  const handleSendButtonClicked = ()=>{
    
  }

  ////////////////////////////////////////////////////////////////////////////////
  return (
    <div   style={{ backgroundImage: 'url("/assets/images/chat.jpg")' }} className='flex flex-col  bg-slate-500 bg-opacity-100  border-4 border-gray-500 border-dashed  absolute h-[400px] w-[300px]  md:h-[400px] md:w-[500px] right-5 md:right-[0px] z-20 text-white rounded-xl '>
    <div className="flex-grow">
       {
         chatContents.map((m)=>(
           m.isAdmin==="true" ? 
             <p className="mb-8 mr-2 mt-4">
              <span className=" bg-gray-100  rounded-md text-black p-2">{m.message}</span> 
            </p>  
           :
             <p className="mb-8 mr-10 mt-4">
               <span className=" bg-green-300 rounded-md text-black p-2">{m.message}</span>
             </p>
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
       //onClick={handleSendMessage}
       className="bg-blue-500 text-white  rounded-lg p-2 "
      >
       שליחה
      </button>
   </div>
 </div>
  )
}

export default chat
