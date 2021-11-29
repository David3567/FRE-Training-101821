import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreatNote from "./CreateNote";
import RenderAddNote from "../RenderProps/RenderAddNote";
import CreatNote2 from "../RenderProps/CreateNote2";

/* 
1.using index as id cause error while deleting!!!
need to figure a better way to asign id and key
eg: timestamp, react uuid

2. need to figure out how to share state(NoteArray), and extract(HOC) the addNote(), deleteNote() methods
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NoteArray: [],
    };
  }

  //add note from the createNote
  addNote = (note) => {
    this.setState((preState) => {
      return {
        NoteArray: [...preState.NoteArray, note],
      };
    }, console.log("add: ", this.state.NoteArray));
  };

  deleteNote = (id) => {
    this.setState((preState) => {
      return {
        NoteArray: [
          preState.NoteArray.filter((note, index) => {
            return index !== id;
          }),
        ],
      };
    }, console.log("delete: ", this.state.NoteArray));
  };

  //   render() {
  //     return (
  //       <>
  //         <Header />
  //         <CreatNote onAdd={this.addNote} />
  //         {this.state.NoteArray.map((note, index) => {
  //           return (
  //             <Note
  //               title={note.title}
  //               paragraph={note.content}
  //               onDelete={this.deleteNote}
  //               key={index}
  //               id={index}
  //             />
  //           );
  //         })}
  //         <Footer />
  //       </>
  //     );
  //   }

  render() {
    return (
      <>
        <Header />
        <RenderAddNote onAdd={this.addNote}>
          {(note, handleChange, handleSubmit) => (
            <CreatNote2
              note={note}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
        </RenderAddNote>

        {this.state.NoteArray.map((note, index) => {
          return (
            <Note
              title={note.title}
              paragraph={note.content}
              onDelete={this.deleteNote}
              key={index}
              id={index}
            />
          );
        })}

        <Footer />
      </>
    );
  }
}

export default App;
