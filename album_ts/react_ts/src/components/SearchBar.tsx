import React, { Component } from "react";
import Message from "./Message";
import Album from "./Album";

interface AlbumObj {
  artworkUrl100: string;
  collectionName: string;
  collectionId: string;
};

interface MyState {
    userInput:string, 
    timerID: number,
    count: number,
    albumArray: AlbumObj[]
};

interface MyProps {

}


class SearchBar extends Component<MyProps,MyState> {
  

  constructor(props:MyProps) {
    super(props);

    this.state = {
      userInput: "",
      timerID: 0,
      count: 0,
      albumArray: []
    };
  }

  getData() {
    const artist = this.state.userInput;
    //if user input nothing
    if (artist.length === 0) {
      return;
    }

    const url = `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=10&offset=${this.state.count}`;

    fetch(url,{ method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}})
      .then((res) => res.json())
      .then((data) => {
        if (this.state.count === 0) {
          this.setState({
            count: this.state.count + data.resultCount,
            albumArray: data.results
          });
        } else {
          this.setState({
            count: this.state.count + data.resultCount,
            albumArray: [...this.state.albumArray, ...data.results]
          });
        }
      })
      .catch((e) => console.log(e));
  }

  search(event:React.ChangeEvent<HTMLInputElement>) {
    //clear the previous timer ??
    //so every time will check if there is a previous timer need to be cleared?
    //is there a better way to do it???
    if (this.state.timerID) {
      clearTimeout(this.state.timerID);
      
    }

    const currentInput = event.target.value;

    if (currentInput.length !== 0) {
      const timerid = window.setTimeout(() => {
        alert("you finished typing");
        this.getData();
      }, 2000);
      
      this.setState({
        userInput: currentInput,
        count: 0,
        albumArray: [],
        timerID: timerid
      });
    } else {
      this.setState({
        userInput: currentInput,
        count: 0,
        albumArray: [],
        timerID: 0
      });
    }
  }

  render() {
    if (this.state.count !== 0) {
      return (
        <div className="search-wrap">
          <input
            type="text"
            className="search_input"
            id="seach_input"
            placeholder="Search..."
            autoComplete="off"
            onChange={(e) => this.search(e)}
          ></input>
          <Message
            artist={this.state.userInput}
            result_count={this.state.count}
          />
          <div className="album-container">
            <Album albumArray={this.state.albumArray} />
          </div>
          <button onClick={() => this.getData()}>See more</button>
        </div>
      );
    } else {
      return (
        <div className="search-wrap">
          <input
            type="text"
            className="search_input"
            id="seach_input"
            placeholder="Search..."
            autoComplete="off"
            onChange={(e) => this.search(e)}
          ></input>
        </div>
      );
    }
  }
}

export default SearchBar;

