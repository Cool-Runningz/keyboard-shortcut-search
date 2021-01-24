import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import Key from "./Key";
import TableView from "./TableView";

import { Button, Container } from "@material-ui/core";
import { KEYMAPS, shortcutsData, SYMBOLS } from "../helpers/shortcuts";

//TODO: Move these helper functions into a helpers file???
function getRandomInt(max = 1000) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Filter down to all the shortcuts based on the selected category
const getDataFilteredByCategory = (data, category) => {
  return data.filter((item) => item.category === category);
};

/*This function performs an "incremental search."
 *     1. Assign 'indexToCompare' to the last index of the `keysToDisplay` array.
 *     2. Determine the search match by taking the eventKey and comparing it to the last index in the `keysToDisplay` array
 *    */
const searchForIncrementalMatch = (eventKey, keysEntered, currentMatches) => {
  const indexToCompare = keysEntered.length - 1;

  return currentMatches.filter((item) => {
    const keyToCompare = KEYMAPS[eventKey] || eventKey;
    return (
      keyToCompare.toUpperCase() === item.hotkeys[indexToCompare]?.toUpperCase()
    );
  });
};

const KeyboardView = (props) => {
  //State
  const [keysToDisplay, setKeysToDisplay] = useState([]);
  const [shortcutsToDisplay, setShortcutsToDisplay] = useState([]);

  //Refs
  const searchMatches = useRef(
    getDataFilteredByCategory(shortcutsData, props.category)
  );

  useEffect(() => {
    console.groupCollapsed("useEffect - category changed - ", props.category);
    console.log("category changed: ", props.category);
    console.groupEnd();

    //FIXME: This gets called on initial render so determine if you actually want this here

    /*FIXME: Need to handle scenario when a user switches category mid-search. Currently,
     *        the logic won't work cuz we are doing a "progressive" or "incremental" search and the data will be
     *        based off the shortened data from the previous category. We almost want a "reset"
     *        button of sorts. Think about best way to handle this.*/
    //searchForMatch(event.key, keysToDisplay)
    //setKeysToDisplay([])
  }, [props.category]);

  useEffect(() => {
    if (keysToDisplay.length > 0) {
      const lastKeyPressed = keysToDisplay[keysToDisplay.length - 1].keyEntered;

      //Search for a match as the user presses keys
      searchMatches.current = searchForIncrementalMatch(
        lastKeyPressed,
        keysToDisplay,
        searchMatches.current
      );

      console.log("current search matches: ", searchMatches.current);
      setShortcutsToDisplay(searchMatches.current);
    }
  }, [keysToDisplay]);

  /* This method gets called when the keyDown event occurs and handles creating the new <Key /> component for
   * display and setting up the object structure to be searchable later on. */
  const handleKeyDown = useCallback((event) => {
    if (!event.metaKey) event.preventDefault();

    //Setup <Key /> component to render the mac key to the DOM
    const KeyComponent = (
      <Key
        key={getRandomInt()}
        name={KEYMAPS[event.key] || event.key}
        symbol={SYMBOLS[event.key]}
      />
    );

    const newKeyInfo = {
      keyComponent: KeyComponent,
      keyEntered: KEYMAPS[event.key] || event.key
    };

    setKeysToDisplay((prevState) =>
      prevState.length < 4 ? [...prevState, newKeyInfo] : prevState
    );
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleClearKeys = () => {
    //Reset all the things
    setKeysToDisplay([]);
    setShortcutsToDisplay([]);
    searchMatches.current = getDataFilteredByCategory(
      shortcutsData,
      props.category
    );
  };

  return (
    <Container maxWidth="md">
      <div className="keyboard-keys-container">
        {keysToDisplay.length > 0 && (
          <React.Fragment>
            {keysToDisplay.map((key) => {
              return key.keyComponent;
            })}
            <Button
              color="primary"
              style={{ alignSelf: "center" }}
              onClick={handleClearKeys}
            >
              Clear Keys
            </Button>
          </React.Fragment>
        )}
      </div>
      {keysToDisplay.length === 0 && (
        <p className="keyboard-prompt">
          Enter a key combination to see if it's a shortcut ✂️
        </p>
      )}
      {shortcutsToDisplay.length === 0 && keysToDisplay.length > 0 && (
        <p className="no-results">🔍 No results found </p>
      )}
      {shortcutsToDisplay.length > 0 && keysToDisplay.length > 0 && (
        <TableView category={props.category} data={shortcutsToDisplay} />
      )}
    </Container>
  );
};
KeyboardView.propTypes = {
  category: PropTypes.string.isRequired
};

export default KeyboardView;
