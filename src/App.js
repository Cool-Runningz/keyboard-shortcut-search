import React, { useState } from "react";

import "./App.css";
import { Container } from "@material-ui/core";

import { macShortcutsData, windowsShortcutsData } from "./helpers/shortcuts";

//Components
import OptionBar from "./components/OptionBar";
import KeyboardView from "./components/KeyboardView";
import TableView from "./components/TableView";

const Icons = {
  Native: "🖥️",
  Browser: "🌐",
  Document: "📄"
};

function App() {
  const [view, setView] = useState("keyboard");
  const [category, setCategory] = useState("Native");
  const [osValue, setOSValue] = useState("Mac");

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
          onOSChange={setOSValue}
          osValue={osValue}
        />
        <h2>
          ️ {Icons[category]} {osValue} {category} Shortcuts{" "}
        </h2>
        {view === "keyboard" ? (
          <KeyboardView category={category} osValue={osValue} data={osValue === "Mac" ? macShortcutsData : windowsShortcutsData} />
        ) : (
          <TableView category={category} data={osValue === "Mac" ? macShortcutsData : windowsShortcutsData} />
        )}
      </Container>
    </div>
  );
}

export default App;
