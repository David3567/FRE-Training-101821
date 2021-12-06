

const About = () => {

    return(
        <section id="about">  

        <div class="row section-intro">
            <div class="col-twelve">
 
                <h5>About</h5>
                <h1>Let me introduce myself.</h1>
 
                <div class="intro-info">
 
                    <img src="images/profile-pic.jpg" alt="Profile Picture" />
 
                    <p class="lead">Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure sunt id pariatur Duis laboris amet exercitation veniam labore consectetur ea id quis eiusmod.</p>
                </div>   			
 
            </div>   		
        </div>
 
        <div class="row about-content">
 
            <div class="col-six tab-full">
 
                <h3>Profile</h3>
                <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
 
                <ul class="info-list">
                    <li>
                        <strong>Fullname:</strong>
                        <span>Juan Dela Cruz</span>
                    </li>
                    <li>
                        <strong>Birth Date:</strong>
                        <span>September 28, 1987</span>
                    </li>
                    <li>
                        <strong>Job:</strong>
                        <span>Freelancer, Frontend Developer</span>
                    </li>
                    <li>
                        <strong>Website:</strong>
                        <span>www.kardswebsite.com</span>
                    </li>
                    <li>
                        <strong>Email:</strong>
                        <span>me@kardswebsite.com</span>
                    </li>
 
                </ul>
 
            </div>
 
            <div class="col-six tab-full">
 
                <h3>Skills</h3>
                <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
 
                 <ul class="skill-bars">
                    <li>
                        <div class="progress percent90"><span>90%</span></div>
                        <strong>HTML5</strong>
                    </li>
                    <li>
                        <div class="progress percent85"><span>85%</span></div>
                        <strong>CSS3</strong>
                    </li>
                    <li>
                        <div class="progress percent70"><span>70%</span></div>
                        <strong>JQuery</strong>
                    </li>
                    <li>
                        <div class="progress percent95"><span>95%</span></div>
                        <strong>PHP</strong>
                    </li>
                    <li>
 
                        <div class="progress percent75"><span>75%</span></div>
                        <strong>Wordpress</strong>
                    </li>
       
                 </ul>
 
            </div>
 
        </div>
 
        <div class="row button-section">
            <div class="col-twelve">
                <a href="#contact" title="Hire Me" class="button stroke smoothscroll">Hire Me</a>
                <a href="#" title="Download CV" class="button button-primary">Download CV</a>
            </div>   		
        </div>
 
    </section>
    );
}

export default About;