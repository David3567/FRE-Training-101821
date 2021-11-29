import React, {useState} from "react";
import { withAddNote } from "../HOC/withAddNote";


class CreatNote extends React.Component {


    
   render(){
        return(
        <div>
            <form>
                <input name="title" value={this.props.note.title} onChange={this.props.handleChange} placeholder="Title"/>
                <textarea name="content" value={this.props.note.content} onChange={this.props.handleChange} placeholder="Take a note..." />
                <button onClick={this.props.handleSubmit}>Add</button>
            </form>
        </div>
        )

   }
    
}

const CreateNote_Wrapped = withAddNote(CreatNote);

export default CreateNote_Wrapped;