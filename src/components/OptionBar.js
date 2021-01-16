import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "@material-ui/core";

//Icons
import ComputerIcon from "@material-ui/icons/Computer";
import TocIcon from "@material-ui/icons/Toc";
import LanguageIcon from "@material-ui/icons/Language";
import DescriptionIcon from "@material-ui/icons/Description";
import KeyboardIcon from "@material-ui/icons/Keyboard";

const OptionBar = (props) => {
  const handleViewChange = () => {
    props.onViewChange((prevState) => {
      return prevState === "keyboard" ? "list" : "keyboard";
    });
  };

  return (
    <div>
      <h4>Shortcut Categories: </h4>
      <div className="options-container">
        <ButtonGroup
          size="large"
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button startIcon={<ComputerIcon />}>Mac</Button>
          <Button startIcon={<LanguageIcon />}>Browser</Button>
          <Button startIcon={<DescriptionIcon />}>Text/Documents</Button>
        </ButtonGroup>

        <Button
          variant="contained"
          color="primary"
          endIcon={
            props.currentView === "keyboard" ? <TocIcon /> : <KeyboardIcon />
          }
          onClick={handleViewChange}
        >
          {props.currentView === "keyboard" ? (
            <span>List</span>
          ) : (
            <span>Keyboard</span>
          )}
        </Button>
      </div>
    </div>
  );
};

OptionBar.propTypes = {
  onViewChange: PropTypes.func.isRequired,
  currentView: PropTypes.string
};

export default OptionBar;
