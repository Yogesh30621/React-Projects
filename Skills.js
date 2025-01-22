import "./Skills.css"
function Skills(props){
    let Data=props.Skill
    console.log(Data,"Skills data")
   return(
    <>
    <div className="Skills_main_div">
    <h1>Skills :- </h1>
    <div className="Skills">
        {
            Data.map((val) => {
                return (
                    <>
                        <div className="skill_box">
                            <h3>{val}</h3>
                        </div>
                    </>
                )
            })
        }
    </div>
    </div>
    </>
   ) 
}

export default Skills