import React, { Component } from "react";

/**Components**/
import { Button } from "./Button";

/**API Calls**/
import { fetchStories } from "../api/story";

import { inject } from "mobx-react";

@inject("storyStore")
class SearchStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { value } = event.target;
    this.setState(() => ({ query: value }));
  }

  onSubmit(event) {
    event.preventDefault();
    const { query } = this.state;
    const { storyStore } = this.props;
    if (query) {
      // TODO do API fetch stories
      fetchStories(query)
        .then(results => storyStore.setStories(results.hits))
        .catch(storyStore.setError);

      this.setState(() => ({ query: "" }));
    }
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.onChange}
          name="query"
          id="query"
        />
        <Button type="submit" className="" onClick={this.onSubmit}>
          Search
        </Button>
      </form>
    );
  }
}
export default SearchStories;
