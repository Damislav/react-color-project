import { withStyles } from "@material-ui/core";
import React from "react";
import styles from "../styles/PaletteFooter";
const PaletteFooter = (props) => {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {props.paletteName}
      <span className={classes.emoji}>{props.emoji}</span>
    </footer>
  );
};

export default withStyles(styles)(PaletteFooter);
