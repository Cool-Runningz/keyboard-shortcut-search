import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from "@material-ui/core";

//Icons
import ComputerIcon from "@material-ui/icons/Computer";
import TocIcon from "@material-ui/icons/Toc";
import LanguageIcon from "@material-ui/icons/Language";
import DescriptionIcon from "@material-ui/icons/Description";
import KeyboardIcon from "@material-ui/icons/Keyboard";

const OptionBar = (props) => {
  const handleChange = (event) => {
    props.onOSChange(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="options-container-radiogroup">
        <FormControl component="fieldset">
          <FormLabel component="legend">Choose an operating system: </FormLabel>
          <RadioGroup
            row
            name="operatingSystem"
            value={props.osValue}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Mac"
              control={<Radio color="primary" />}
              label="Mac"
            />
            <FormControlLabel
              value="Windows"
              control={<Radio color="primary" />}
              label="Windows"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="options-container-buttons">
        <ButtonGroup size="large" variant="contained" color="primary">
          <Button
            startIcon={<ComputerIcon />}
            onClick={() => {
              props.onCategoryChange("Native");
            }}
          >
            Native
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
          onClick={() =>
            props.onViewChange(
              props.currentView === "keyboard" ? "list" : "keyboard"
            )
          }
        >
          {props.currentView === "keyboard" ? (
            <span>Table</span>
          ) : (
            <span>Keyboard</span>
          )}
        </Button>
      </div>
    </React.Fragment>
  );
};

OptionBar.propTypes = {
  currentView: PropTypes.string,
  onCategoryChange: PropTypes.func.isRequired,
  onOSChange: PropTypes.func.isRequired,
  osValue: PropTypes.string.isRequired,
  onViewChange: PropTypes.func.isRequired
};

export default OptionBar;
