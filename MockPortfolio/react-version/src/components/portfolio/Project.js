import React from "react";

const Project = (props) => {
    const { name, info, styleClass } = props;
    return (
        <div className="col-sm-4 col-md-4 text-center">
            <div className={`${styleClass}`}>
                <h3>{name}</h3>
                <p>{info}</p>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                        <div className="project-more-info">
                            <a className="btn btn-default btn-border" href="#">More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;