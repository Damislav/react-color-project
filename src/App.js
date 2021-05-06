import React, { Component } from "react";
import Palette from "./components/Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[2]} />
      </div>
    );
  }
}

export default App;
