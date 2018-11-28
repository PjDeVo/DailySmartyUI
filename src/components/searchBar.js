import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";

class SearchBar extends Component {
  handleFormSubmit = function({ query }) {
    console.log("trying to candle submit for query", query);
  };
  rednderInput(field) {
    return (
      <input type="text" placeholder="Search DailySmarty" {...field.input} />
    );
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        className="searc-bar"
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
      >
        <Field name="query" component={this.rednderInput} />
      </form>
    );
  }
}

SearchBar = reduxForm({
  form: "searchBar"
})(SearchBar);
export default SearchBar;
