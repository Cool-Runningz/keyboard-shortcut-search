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
    <div className="options-container">
      <ButtonGroup
        size="large"
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button
          startIcon={<ComputerIcon />}
          onClick={() => {
            props.onCategoryChange("Mac");
          }}
        >
          Mac
        </Button>
        <Button
          startIcon={<LanguageIcon />}
          onClick={() => {
            props.onCategoryChange("Browser");
          }}
        >
          Browser
        </Button>
        <Button
          startIcon={<DescriptionIcon />}
          onClick={() => {
            props.onCategoryChange("Document");
          }}
        >
          Document
        </Button>
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
          <span>Table</span>
        ) : (
          <span>Keyboard</span>
        )}
      </Button>
    </div>
  );
};

OptionBar.propTypes = {
  currentView: PropTypes.string,
  onCategoryChange: PropTypes.func.isRequired,
  onViewChange: PropTypes.func.isRequired
};

export default OptionBar;
