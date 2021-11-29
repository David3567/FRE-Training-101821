import React from "react";
import RenderAddNote from "./RenderAddNote";

class CreatNote2 extends React.Component {
  render() {
    const { note, handleChange, handleSubmit } = this.props;
    return (
      <div>
        <form>
          <input
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <textarea
            name="content"
            value={note.content}
            onChange={handleChange}
            placeholder="Take a note..."
          />
          <button onClick={handleSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

export default CreatNote2;
