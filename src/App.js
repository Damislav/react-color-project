import React, { Component } from "react";
import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";
import { Route, Switch } from "react-router-dom";
import SingleColorPalette from "./components/SingleColorPalette/SingleColorPalette";
import PaletteList from "./components/PaletteList/PaletteList";
import Palette from "./components/Palette/Palette";
import NewPaletteForm from "./components/NewPaletteForm/NewPaletteForm";
class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route path="/palette/new" render={() => <NewPaletteForm />} />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
