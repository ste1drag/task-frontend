import {useEffect, useState} from "react";
import getAllMessages from "../../services/welcomePage.service";

const WelcomePageComponent = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        getAllMessages().then((messages) => {
            setData([...messages]);
        })
    },[]);

    let messages = [];

    data.map((message) => messages.push(<li>{message.content}</li>) );

    return (
        <>
            <h1>Guestbook</h1>
            <ul>
                {messages}
            </ul>
        </>
    );
}

export default WelcomePageComponent;