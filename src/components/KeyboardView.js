import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Key from "./Key";

import { Button, Container } from "@material-ui/core";
import { KEYMAPS, SYMBOLS } from "../helpers/shortcuts";

function getRandomInt(max = 100) {
  return Math.floor(Math.random() * Math.floor(max));
}

const KeyboardView = (props) => {
  const [keysToDisplay, setKeysToDisplay] = useState([]);

  const renderKey = (key) => {
    //TODO: See if there's a way to get more unique keys cuz sometimes you get the same one
    const componentKey = (
      <Key
        key={getRandomInt()}
        name={KEYMAPS[key] || key}
        symbol={SYMBOLS[key]}
      />
    );
    setKeysToDisplay([...keysToDisplay, componentKey]);
  };

  const handleKeyDown = useCallback(
    (event) => {
      console.groupCollapsed("handleKeydown - test");
      console.log(event);
      console.log("CODE: ", event.code);
      console.log("key: ", event.key);
      console.log("keyCode: ", event.keyCode);
      console.groupEnd();

      if (!event.metaKey) {
        event.preventDefault();
      }
      if (keysToDisplay.length < 4) {
        renderKey(event.key);
      }
    },
    [keysToDisplay]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Container maxWidth="md">
      <div className="keyboard-keys-container">
        {keysToDisplay.length > 0 && (
          <React.Fragment>
            {keysToDisplay.map((key) => {
              return key;
            })}
            <Button
              color="primary"
              style={{ alignSelf: "center" }}
              onClick={() => setKeysToDisplay([])}
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
    </Container>
  );
};

export default KeyboardView;
