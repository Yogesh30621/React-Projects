import "./Project.css"

function Project(){
return(
    <>
        <div className="main_project">
        <h1>Projects :-</h1>
        <div className="project">
            <ul>
                <li><p className="project_name">Fitness Hub</p>
                    <ul>
                        <li>Using HTML,CSS,JvaScript</li>
                    </ul>
                </li>

                
                <li><p className="project_name">Fruit Recognize System using Machine Learning</p>
                <ul>
                        <li>Thanks to computer vision and advanced image processing techniques, it has been successfully employed in various works for automatic fruit recognition and classification. Some of the notable works on automatic fruit recognition and classification have been briefly described in the following paragraphs.</li>
                    </ul>
                </li>


                <li><p className="project_name">Accident Detection System</p>
                <ul>
                        <li>Real-world traffic surveillance videos need continuous supervision to monitor and take appropriate actions in case of fatal accidents. However, continuously monitoring them with human supervision is error prone and tedious. Therefore, a deep learning approach for automatic detection and localization of road accidents has been proposed by formulating the problem as anomaly detection.</li>
                    </ul>
                </li>
            </ul>
        </div>

        </div>
    </>
)
}

export default Project