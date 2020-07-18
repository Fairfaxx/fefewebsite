import React from 'react';
import Button from './Button';
import './Footer.css';


const Footer = (props) => {
    return(
        <div>
            <footer>

                <h1 className="h1F">
                    LET'S GET IN TOUCH
                </h1>



                <div id="mainContact" className="container">
                      <form action="action_page.php">
                    
                        
                    <label for="fname">Full Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    
                        
                    <label for="lname">Email Address</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                        
                    <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write your doubts or needs.." style={{height: "200px"}}></textarea>
                    <div class="ui inverted segment">
                    <input id="submit" type="submit" value={props.value} class="ui inverted purple button"/>
                     
                    {/* <Button/> */}
                    </div>

                      </form>
                </div> 


                    <p id="contact" className="email">
                        fede.lemaire@gmail.com <br/>
                    </p>
                
            </footer>
         </div>
    )
}


export default Footer;