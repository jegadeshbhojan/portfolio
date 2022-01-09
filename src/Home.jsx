import profile from "./profile.jpg"
import "./Home.css";

export function Home (){
    return (
        <>
        <div className="header">
        
        <h2>  I am jegadesh, web developer </h2>
        <img src={profile} className="profileimg" alt="profile"/>
        </div>
       
        </>
       
    )
}

