import React from "react";
import { Link } from "react-router-dom";


const HomePage = (props) => {
    return (
        <div className="app">
            <section>
                <Link to="/grocery">To Grocery</Link>
                <Link to="/homedepot">To Homedepot</Link>
                <Link to="/supreme">To Supreme</Link>
            </section>
        </div>
    )
}

export default HomePage;