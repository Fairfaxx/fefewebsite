import React from 'react';
import './Main.css';


const Main = (props) => {
    return(
        <div className="main">
            <h2 id="about">
                ABOUT:
            </h2>
            <h3 className="main-h3"> 
                {props.textH3}
            </h3>
            <img class="ui fluid image" src={require('./mac.jpg')}></img>
                <div className="p1">

                    <h2>
                        EDUCATION:
                    </h2>
                    <p>
                        - Colt Steel’s The Web Developer Bootcamp at Udemy 8/19 - 1/20
                        This course is about:- HTML5 - CSS3 - JavaScript - Bootstrap 4 - SemanticUI - DOM Manipulation - jQuery -Unix(Command Line) Commands - NodeJS - NPM - ExpressJS - REST - MongoDB -Database Associations - Authentication - PassportJS - Authorization
                    <br />
                    </p>
                    <p>
                        - Fullstack JavaScript at Teamtreehouse 10/19 - 1/20
                        This course is about:
                        Master JavaScript with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack an more. 

                    </p>
                    <p>
                        - EducacionIt 1/20 - Actualidad
                        The course has a total duration of 9 months.
                        The contents visited during the year include:
                        - Front End Full Stack - JS Server Side w/ MongoDB - Integraciones - Desarrollo Git - React Frameworks - Fundamentos Metodologias Agiles & more…

                    </p>

                    <p>
                        - Interaction Design Foundation 7/19 - 1/20 
                        I was certified in UX Design from scratch. Currently I do freelance work with a ux designer that I learn from day to day thanks to his knowledge
                    </p>

                </div>
                <br/>

                <div class="p2">

                <h2>
                    Skills:
                </h2>    
                <p>
                    My skills are:
                    Design Thinking - Google Analythics - Python Basics -  Fast learning - Fast worker - Good listener - Good communication - Good team player - Active learning - knowledge with computer - 

                </p>

                <h2>
                    Languages: 
                </h2>

                <p>
                    
                    -English with very good command <br/>
                    -Portuguese with Highly Proficient

                </p>
                </div>


        </div>
    )
};


export default Main;