import axios from "axios";

const url = "http://localhost:3001/messages";

const getAllMessages = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
}

export default getAllMessages;