import React, { useState } from "react";

import "./App.css";
import GithubLogo from "./images/GitHub-Mark-Light.png";

//Data
import macShortcutsData from "./data/macShortcuts";
import windowsShortcutsData from "./data/windowsShortcuts";

//Components
import Container from "@material-ui/core/Container";
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
      <div className="gh-logo-container">
        <div className="triangle-top-right" />
        <a
          href="https://github.com/Cool-Runningz/keyboard-shortcut-search"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GithubLogo} alt="Github Logo" style={{ width: "3rem" }} />
        </a>
      </div>

      <div className="header-title">
        <span>⌨️</span>
        <h1>️ Shortcut Search</h1>
      </div>

      <p className="sub-description">
        A collection of commonly used keyboard shortcuts to help boost
        productivity ✅
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
          <KeyboardView
            category={category}
            osValue={osValue}
            data={osValue === "Mac" ? macShortcutsData : windowsShortcutsData}
          />
        ) : (
          <TableView
            category={category}
            data={osValue === "Mac" ? macShortcutsData : windowsShortcutsData}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
