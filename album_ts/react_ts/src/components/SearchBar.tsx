import React, { Component } from "react";
import Message from "./Message";
import Album from "./Album";



type mystate = {
    userInput:string, 
    timerID: number,
    count: number,
    albumArray: []};

class SearchBar extends Component {
  constructor(props:any) {
    super(props);

    this.state: mystate = {
      userInput: "",
      timerID: 0,
      count: 0,
      albumArray: []
    };
  }

  getData(artist) {
    //if user input nothing
    if (artist.length === 0) {
      return;
    }

    const url = `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=10 `;

    //need to check the this.setState, do I need the previous state
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          count: this.state.count + data.resultCount,
          albumArray: data.results
        });
      })
      .catch((e) => console.log(e));
  }

  getMore() {
    const url = `https://itunes.apple.com/search?term=${
      this.state.userInput
    }&media=music&entity=album&attribute=artistTerm&limit=10&offset=${
      this.state.count + 1
    }`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          count: this.state.count + data.resultCount,
          albumArray: [...this.state.albumArray, ...data.results]
        });
      })
      .catch((e) => console.log(e));
  }

  search(event) {
    //clear the previous timer ??
    //so every time will check if there is a previous timer need to be cleared?
    //is there a better way to do it???
    if (this.state.timerID) {
      clearTimeout(this.state.timerID);
      console.log("clear timerId: ", this.state.timerID);
    }

    const currentInput = event.target.value;

    if (currentInput.length !== 0) {
      const timerid = setTimeout(() => {
        alert("you finished typing");
        this.getData(currentInput);
      }, 2000);
      console.log("create timeid: ", timerid);
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
        timeID: 0
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
            onKeyPress={(e) => this.search(e)}
          ></input>
          <Message
            artist={this.state.userInput}
            result_count={this.state.count}
          />
          <div className="album-container">
            <Album albumArray={this.state.albumArray} className="album-wrap" />
          </div>
          <button onClick={() => this.getMore()}>See more</button>
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

