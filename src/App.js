import React, { useState } from "react";

import "./App.css";
import { Container } from "@material-ui/core";

//Components
import OptionBar from "./components/OptionBar";
import KeyboardView from "./components/KeyboardView";
import TableView from "./components/TableView";

function App() {
  const [view, setView] = useState("keyboard");
  const [category, setCategory] = useState("Mac");

  return (
    <div className="app">
      <h1>Keyboard Shortcut Finder ⌨️</h1>
      <p className="sub-description">
        A collection of commonly used shortcuts to help boost productivity ✅
      </p>
      <Container component="main">
        <OptionBar
          currentView={view}
          onCategoryChange={setCategory}
          onViewChange={setView}
        />
        <h2> {category} Shortcuts </h2>
        {view === "keyboard" ? (
          <KeyboardView category={category} />
        ) : (
          <TableView category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
