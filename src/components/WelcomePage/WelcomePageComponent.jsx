import {useEffect, useState} from "react";
import getAllMessages from "../../services/welcomePage.service";
import { useNavigate } from "react-router-dom";

const WelcomePageComponent = () => {
    const [data,setData] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        getAllMessages().then((reviews) => {
            setData([...reviews]);
        }).catch((err)=>{
            console.log(err);
            setData([]);
        });
    },[]);

    let reviews = [];

    data.map((review) => reviews.push(<li>{review.name}:{review.message}</li>) );

    const changeRoute = () => {
        navigate("message");
    }

    return (
        <>
            <h1>Guestbook</h1>
            <h3>See what people wrote about us</h3>
            <br/>
            <br/>
            <ul>
                {reviews}
            </ul>
            <button onClick={changeRoute}>Leave a message</button>
        </>
    );
}

export default WelcomePageComponent;