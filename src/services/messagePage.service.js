import axios from "axios";

const url = "http://localhost:3001/messages";

const postMessage = async (name,message) => {
    let res;


    if(name.length!=0 && message.length!=0){
        res = await axios.post(url,{"name":name,"message":message});
        return res.statusText;
    } else {
        alert("Name or message is empty");
    }


}

export default postMessage;