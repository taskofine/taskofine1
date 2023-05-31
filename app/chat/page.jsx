'use client'
import React,{useState,useEffect} from 'react';
import coaching  from '../../utils/skeletonCoaching';



const ChatPage = () => {

  
  const isSkeletonUpdated = localStorage.getItem("isSkeletonUpdated");
  const chat = JSON.parse(localStorage.getItem("chat"));
  const [chatContents, setChatContents] = useState([]);
  
  useEffect(()=>{
    setChatContents(chat);
 
  },[]);


  return (
    <div>ChatPage</div>
  )
}

export default ChatPage
