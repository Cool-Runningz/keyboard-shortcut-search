import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import Key from "./Key";

import { Container } from "@material-ui/core";

const KeyboardView = (props) => {
  const [showCmdKey, setShowCmdKey] = useState(false);
  const [showCtrlKey, setShowCtrlKey] = useState(false);

  //TESTING - POC - Tidy this up
  const handleKeyDown = useCallback((event) => {
    console.groupCollapsed("handleKeydown - test");
    console.log(event);
    const { code, key } = event;
    console.log("CODE: ", code);
    console.log("key: ", key);
    console.groupEnd();

    if (event.metaKey) {
      event.preventDefault();
      setShowCmdKey(true);
    }
    if (event.ctrlKey) {
      setShowCtrlKey(true);
    }
    if (event.key === "Shift") {
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      console.log("removing event listenter...");
      window.removeEventListener("keydown", handleKeyDown);
      setShowCtrlKey(false);
      setShowCmdKey(false);
    };
  }, [handleKeyDown]);

  return (
    <Container maxWidth="md" style={{ backgroundColor: "antiquewhite" }}>
      <div className="keyboard-keys-container">
        {showCmdKey && (
          <>
            <Key name="command" symbol="&#x2318;" />
          </>
        )}
        {showCtrlKey && (
          <>
            <Key name="control" symbol="&#8963;" />
          </>
        )}
      </div>
      <div className="shortcut-description">
        <p>This is the space where I will explain what the shortcut does</p>
      </div>
      <p className="keyboard-prompt">
        Enter a key combination to see if it's a shortcut ✂️
      </p>
    </Container>
  );
};

export default KeyboardView;
