import { useEffect, useState } from "react";
import postMessage from "../../services/messagePage.service";
const MessagePageComponent = () => {

   const [message,setMessage] = useState("");
   const [name,setName] = useState("");
   const [responseText, setResponseText] = useState("");
    const [disabled, setDisabled] = useState(false);
   const handleSubmit = (event) => {
       event.preventDefault();

       handleSubmitMessage(name,message);
   }

   const handleSubmitMessage = (name,message) => {
       postMessage(name,message).then((response)=>{
           setResponseText(response);
       }).catch((err)=>{
           setResponseText("Fail");
       });
       setDisabled(true);
   }

   const handleChangeMessage = (event) => {
       setMessage(event.target.value);
   }

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

   return (
       <>
           <form onSubmit={handleSubmit}>
               <label>
                   Name:
                   <input type="text" value={name} onChange={handleChangeName}/>
               </label>
               <br/>
               <label>
                   Message:
                   <input type="text" value={message} onChange={handleChangeMessage}/>
               </label>
               <br/>
               <input type="submit" value="Post" disabled={disabled}/>
               <p>{responseText}</p>
           </form>
       </>
   )
};

export default MessagePageComponent;