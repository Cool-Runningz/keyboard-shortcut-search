import React, { useState } from "react";

import "./App.css";
import { Container } from "@material-ui/core";

//Components
import OptionBar from "./components/OptionBar";
/* import KeyboardView from "./components/KeyboardView"; */
import TableView from "./components/TableView";

function App() {
  const [view, setView] = useState("keyboard");

  return (
    <div className="app">
      <h1>Keyboard Shortcut Finder ⌨️</h1>
      <Container component="main">
        <OptionBar onViewChange={setView} currentView={view} />
        {/* {view === "keyboard" ? <KeyboardView /> : <TableView />} */}
        <TableView />
      </Container>
    </div>
  );
}

export default App;
