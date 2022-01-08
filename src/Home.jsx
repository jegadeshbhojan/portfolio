import profile from "./profile.jpg"
import "./Home.css";
import {Skills} from "./Skills.jsx"
export function Home (){
    return (
        <>
        <div className="header">
        
        <h2> Hii I am jegadesh. front end developer </h2>
        <img src={profile} className="profileimg" alt="profile"/>
        </div>
        <Skills/>
        </>
       
    )
}

