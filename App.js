// import './App.css';
import Nav from "./Nav";
import Skills from "./Skills";
import Education from "./Education";
import Project from "./Project";
import Experiance from "./Experiance";

function App() {
  let SkillData=["HTML","CSS","JavaScript","Python","JQuery","ReactJS"]
  return(
    <>
    <div>
       <Nav />   
       <Skills Skill= {SkillData}/> 
       <Education />  
       <Project />  
       <Experiance />  
    </div>
    </>
  ) ;
}

export default App;
