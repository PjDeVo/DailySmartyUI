import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";

class Results extends Component {
  handleSearchBarSubmit(query) {
    console.log("trying to make this jawn work");
  }
  render() {
    return (
      <div>
        <Logo size={55} />
        <SearchBar onSubmit={query => this.handleSearchBarSubmit(query)} />
      </div>
    );
  }
}

export default Results;
