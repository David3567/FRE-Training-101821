//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
import React from "react";


function Note(props){

    return (
    <div className = 'note'>
    <h1>{props.title}</h1>
    <p>{props.paragraph}</p>
    <button onClick={() => props.onDelete(props.id)}>DELETE</button>
    </div>);
}

export default Note;