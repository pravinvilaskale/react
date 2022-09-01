import React from 'react'
import home from '../img/Home.PNG';
import user from '../img/User.PNG';
import placement from '../img/Placement.PNG';

const About = () => {
    return (
        <>
            <div className='about'>
                <h1>About Project</h1>
                <p>The purpose of the project “WEB BASED PLACEMENT MANAGEMENT SYSTEM USING CERTIFICATE AUTHENTICATOR”, the manual work makes the process slow and other problems such as inconsistency and ambiguity on operations. In order to avoid this web-based placement managed system is proposed, where the student information in the college with regard to placement is managed efficiently. It intends to help fast in fast access procedures in placement related activities and ensures to maintain the details of the student. Students logging should be able to upload their personal and educational information. The key feature of this project is that it is one-time registration enabled. The placement cell calls the companies to select their students for jobs via the campus interview. The placement cell allows the companies to view the student resumes in selective manner. They can filter the students’ profile as per their requirement. The job details of the placed students will be provided by the administrator.
</p>
            </div>
            <div className="responsive about">
                <div className="gallery">
                    <a href="react.png">
                        <img src={home} alt="img" width="600" height="400" />
                    </a>
                    <div className="desc">Home Page.</div>
                </div>
                <div className="gallery">
                    <a href="react.png">
                        <img src={user}  alt="img" width="600" height="400" />
                    </a>
                    <div className="desc">User Page.</div>
                </div>
                <div className="gallery">
                    <a href="react.png">
                        <img src={placement}  alt="img" width="600" height="400" />
                    </a>
                    <div className="desc">Placement page.</div>
                </div>
            </div>
        </>
    )
}
export default About