import React from "react";
import Project from "./Project";

const data = [
    {
        id: 0,
        name: "LUV TALK Website",
        description: "Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress. ",
        styleClass: "luvtalk-project",
    },
    {
        id: 1,
        name: "Personal Website",
        description: "Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.",
        styleClass: "personal-website-project",
    },
    {
        id: 2,
        name: "Strike Zone Analysis",
        description: "Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.",
        styleClass: "strike-zone-project",
    }

]
const Portfolio = (props) => {
    const [projects] = React.useState(data)
    return (
        <div className="projects">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 text-center">
                        <div className="projects-header">
                            <h1>Projects and Portfolio</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-12 text-center">
                        <div className="projects-header-quote">
                            <h3>Sharing my endeavors and passions...</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {projects.map(project => <Project key={project.id} name={project.name} info={project.description} styleClass={project.styleClass} />)}
                </div>

                <div className="row">
                    <div className="col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
                        <div className="see-more-button">
                            <a className="btn btn-default btn-border" href="#">More Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;