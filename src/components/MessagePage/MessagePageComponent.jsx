import { useEffect, useState } from "react";
import postMessage from "../../services/messagePage.service";
const MessagePageComponent = () => {

   const [message,setMessage] = useState("");
   const [responseText, setResponseText] = useState("");

   const handleSubmit = (event) => {
       event.preventDefault();

       handleSubmitMessage(message);
   }

   const handleSubmitMessage = (message) => {
       postMessage(message).then((response)=>{
           setResponseText(response);
       });
   }

   const handleChange = (event) => {
       setMessage(event.target.value);
   }

   return (
       <>
           <form onSubmit={handleSubmit}>
               <label>
                   Message:
                   <input type="text" value={message} onChange={handleChange}/>
               </label>
               <input type="submit" value="Post"/>
               <p>{responseText}</p>
           </form>
       </>
   )
};

export default MessagePageComponent;