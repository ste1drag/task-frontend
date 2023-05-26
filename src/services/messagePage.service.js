import axios from "axios";

const url = "http://localhost:3004/messages";

const postMessage = async (message) => {
    const res = await axios.post(url,{"content":message});

    return res.data.toString();
}

export default postMessage;