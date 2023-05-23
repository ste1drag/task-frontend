import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import WelcomePageComponent from "./components/WelcomePage/WelcomePageComponent";
import MessagePageComponent from "./components/MessagePage/MessagePageComponent";
import Nav from "./components/Nav/NavComponent";


function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<WelcomePageComponent/>}/>
                <Route path="/message" element={<MessagePageComponent/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
