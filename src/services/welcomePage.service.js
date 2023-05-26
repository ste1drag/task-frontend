import axios from "axios";

const url = "http://localhost:3004/messages";

const getAllMessages = async () => {
    const { data } = await axios.get(url);
    return data;
}

export default getAllMessages;