export const SYMBOLS = {
  Meta: "⌘",
  Control: "⌃",
  Alt: "⌥",
  Shift: "⇧",
  ArrowUp: "↑",
  ArrowDown: "↓",
  ArrowLeft: "←",
  ArrowRight: "→"
};

export const KEYMAPS = {
  Mac: {
    Meta: "Command",
    " ": "Space",
    Alt: "Option"
  },
  Windows: {
    Meta: "Win",
    " ": "Space"
  }
};

export const ABBREV = {
  Command: "Cmd",
  Control: "Ctrl",
  ArrowUp: "⬆️",
  ArrowDown: "⬇️",
  ArrowLeft: "⬅️",
  ArrowRight: "➡️"
};

export const macShortcutsData = [
  {
    hotkeys: ["Command", "Space"],
    description: "🔍 Show or hide the Spotlight search field",
    category: "Native"
  },
  {
    hotkeys: ["Command", "Tab"],
    description:
      "While holding command, press the TAB key to move forward between the open apps (from left to right)",
    category: "Native"
  },
  {
    hotkeys: ["Command", "`"],
    description:
      "While holding command, press the backquote (`) key to move backwards between the open apps (from right to left)",
    category: "Native"
  },
  {
    hotkeys: ["Control", "Command", "Space"],
    description:
      "Show the Character Viewer, from which you can choose emoji and other symbols.",
    category: "Native"
  },
  {
    hotkeys: ["Command", "M"],
    description: "Minimize the front window to the Dock.",
    category: "Native"
  },
  {
    hotkeys: ["Command", ","],
    description: "Open preferences for the selected app.",
    category: "Native"
  },
  {
    hotkeys: ["Option", "Command", "D"],
    description: "Show or hide the Dock.",
    category: "Native"
  },
  {
    hotkeys: ["Command", "Shift", "3"],
    description: "📸 Take a screenshot of your whole screen.",
    category: "Native"
  },
  {
    hotkeys: ["Command", "Shift", "4"],
    description:
      "📸 Take a screenshot of a portion of your screen. This command presents a crosshair icon and from there you can drag to select the portion of the screen you want to capture",
    category: "Native"
  },
  {
    hotkeys: ["Command", "Shift", "5"],
    description:
      "📸 Provides a slew of screen capture options like recording a selected portion of the screen and selecting the location you would like your screen capture to be saved to.",
    category: "Native"
  },
  {
    hotkeys: ["Shift", "Command", "D"],
    description: "In Finder window → Open the desktop folder",
    category: "Native"
  },
  {
    hotkeys: ["Shift", "Command", "I"],
    description: "In Finder window → Open the iCloud Drive",
    category: "Native"
  },
  {
    hotkeys: ["Option", "Command", "L"],
    description: "In Finder window → Open the Downloads folder.",
    category: "Native"
  },
  {
    hotkeys: ["Shift", "Command", "N"],
    description: "In Finder window → Create a new folder.",
    category: "Native"
  },
  {
    hotkeys: ["Control", "Command", "Q"],
    description: "🔒 Immediately lock your screen.",
    category: "Native"
  },
  {
    hotkeys: ["Command", "N"],
    description: "Opens a new browser window.",
    category: "Browser"
  },
  {
    hotkeys: ["Command", "Shift", "N"],
    description: "Opens a new tab in Incognito mode.",
    category: "Browser"
  },
  {
    hotkeys: ["Command", "L"],
    description: "Shifts focus to the address bar.",
    category: "Browser"
  },
  {
    hotkeys: ["Command", "W"],
    description: "Close the current tab or pop-up.",
    category: "Browser"
  },
  {
    hotkeys: ["Command", "T"],
    description: "Open a new tab, and jump to it",
    category: "Browser"
  },
  {
    hotkeys: ["Command", "9"],
    description: "Jump to the last tab",
    category: "Browser"
  },
  {
    hotkeys: ["F12"],
    description: "Open Developer Tools",
    category: "Browser"
  },
  {
    hotkeys: ["Command", "F"],
    description: "Open the Find Bar to search the current page.",
    category: "Browser"
  },
  {
    hotkeys: ["Command", "+"],
    description: "Make everything on the page bigger (Zoom in).",
    category: "Browser"
  },
  {
    hotkeys: ["Command", "-"],
    description: "Make everything on the page smaller (Zoom out).",
    category: "Browser"
  },
  {
    hotkeys: ["Command", "0"],
    description: "Reset page zoom level.",
    category: "Browser"
  },
  {
    hotkeys: ["Command", "`"],
    description:
      "Switches you between windows (if you have multiple browser windows open)",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "Tab"],
    description: "Move forward to the next tab (to the right)",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "Shift", "Tab"],
    description: "Move backward to the previous tab (to the left)",
    category: "Browser"
  },
  {
    hotkeys: ["Command", "Z"],
    description: "Undo the previous command.",
    category: "Document"
  },
  {
    hotkeys: ["Shift", "Command", "Z"],
    description: "Redo the previous command.",
    category: "Document"
  },
  {
    hotkeys: ["Command", "Y"],
    description: "Redo the previous command.",
    category: "Document"
  },
  {
    hotkeys: ["Command", "C"],
    description:
      "Copy the selected item to the Clipboard. This also works for files in the Finder.",
    category: "Document"
  },
  {
    hotkeys: ["Command", "A"],
    description: "Select all items.",
    category: "Document"
  },
  {
    hotkeys: ["Command", "V"],
    description:
      "Paste the contents of the Clipboard into the current document or app. This also works for files in the Finder.",
    category: "Document"
  },
  {
    hotkeys: ["Command", "F"],
    description: "Find items in a document or open a Find window.",
    category: "Document"
  },
  {
    hotkeys: ["Command", "S"],
    description: "Save the current document.",
    category: "Document"
  },
  {
    hotkeys: ["Command", "B"],
    description: "Make the selected text bold, or turn bold on or off",
    category: "Document"
  },
  {
    hotkeys: ["Command", "I"],
    description: "Italicize the selected text, or turn italics on or off.",
    category: "Document"
  },
  {
    hotkeys: ["Command", "K"],
    description: "Create a hyperlink.",
    category: "Document"
  },
  {
    hotkeys: ["Command", "U"],
    description: "Underline the selected text, or turn underlining on or off.",
    category: "Document"
  },
  {
    hotkeys: ["Command", "ArrowUp"],
    description:
      "Move the insertion point to the beginning of the document OR Move up by one paragraph.",
    category: "Document"
  },
  {
    hotkeys: ["Command", "ArrowDown"],
    description:
      "Move the insertion point to the end of the document OR Move down by one paragraph.",
    category: "Document"
  },
  {
    hotkeys: ["Command", "ArrowLeft"],
    description:
      "Move the insertion point to the beginning of the current line.",
    category: "Document"
  },
  {
    hotkeys: ["Command", "ArrowRight"],
    description: "Move the insertion point to the end of the current line.",
    category: "Document"
  },
  {
    hotkeys: ["Option", "ArrowLeft"],
    description:
      "Move the insertion point to the beginning of the previous word.",
    category: "Document"
  },
  {
    hotkeys: ["Option", "ArrowRight"],
    description: "Move the insertion point to the end of the next word.",
    category: "Document"
  },
  {
    hotkeys: ["Shift", "Command", "ArrowUp"],
    description:
      "Select the text between the insertion point and the beginning of the document.",
    category: "Document"
  },
  {
    hotkeys: ["Shift", "Command", "ArrowDown"],
    description:
      "Select the text between the insertion point and the end of the document.",
    category: "Document"
  },
  {
    hotkeys: ["Shift", "Command", "ArrowLeft"],
    description:
      "Select the text between the insertion point and the beginning of the current line.",
    category: "Document"
  },
  {
    hotkeys: ["Shift", "Command", "ArrowRight"],
    description:
      "Select the text between the insertion point and the end of the current line.",
    category: "Document"
  },
  {
    hotkeys: ["Option", "Shift", "Command", "V"],
    description:
      "Paste and Match Style: Apply the style of the surrounding content to the item pasted within that content.",
    category: "Document"
  },
  {
    hotkeys: ["Option", "Delete"],
    description: "Delete the word to the left of the insertion point.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "D"],
    description:
      "Delete the character to the right of the insertion point. (Forward Delete)",
    category: "Document"
  }
];

export const windowsShortcutsData = [
  {
    hotkeys: ["Control", "N"],
    description: "Opens a new browser window.",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "Shift", "N"],
    description: "Opens a new tab in Incognito mode.",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "L"],
    description: "Shifts focus to the address bar.",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "W"],
    description: "Close the current tab or pop-up.",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "T"],
    description: "Open a new tab, and jump to it",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "9"],
    description: "Jump to the last tab",
    category: "Browser"
  },
  {
    hotkeys: ["F12"],
    description: "Open Developer Tools",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "F"],
    description: "Open the Find Bar to search the current page.",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "+"],
    description: "Make everything on the page bigger (Zoom in).",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "-"],
    description: "Make everything on the page smaller (Zoom out).",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "0"],
    description: "Reset page zoom level.",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "Tab"],
    description: "Move forward to the next tab (to the right)",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "Shift", "Tab"],
    description: "Move backward to the previous tab (to the left)",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "Shift", "Tab"],
    description: "Move backward to the previous tab (to the left)",
    category: "Browser"
  },
  {
    hotkeys: ["Control", "Z"],
    description: "Undo the previous command.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "Y"],
    description: "Redo the previous command.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "C"],
    description:
      "Copy the selected item to the Clipboard. This also works for files in the Finder.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "A"],
    description: "Select all items.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "V"],
    description:
      "Paste the contents of the Clipboard into the current document or app. This also works for files in the Finder.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "F"],
    description: "Find items in a document or open a Find window.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "S"],
    description: "Save the current document.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "B"],
    description: "Make the selected text bold, or turn bold on or off",
    category: "Document"
  },
  {
    hotkeys: ["Control", "I"],
    description: "Italicize the selected text, or turn italics on or off.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "K"],
    description: "Create a hyperlink.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "U"],
    description: "Underline the selected text, or turn underlining on or off.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "ArrowUp"],
    description: "Move the cursor to the beginning of the previous paragraph.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "ArrowDown"],
    description: "Move the cursor to the beginning of the next paragraph.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "ArrowLeft"],
    description: "Move the cursor to the beginning of the previous word.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "ArrowRight"],
    description: "Move the cursor to the beginning of the next word.",
    category: "Document"
  },
  {
    hotkeys: ["Shift", "Control", "ArrowUp"],
    description:
      "Select the text between the cursor and the beginning of the document.",
    category: "Document"
  },
  {
    hotkeys: ["Shift", "Control", "ArrowDown"],
    description:
      "Select the text between the insertion point and the end of the document.",
    category: "Document"
  },
  {
    hotkeys: ["Shift", "Control", "ArrowLeft"],
    description: "Select the word to the left of the cursor.",
    category: "Document"
  },
  {
    hotkeys: ["Shift", "Control", "ArrowRight"],
    description: "Select the word to the right of the cursor.",
    category: "Document"
  },
  {
    hotkeys: ["Alt", "Delete"],
    description: "Delete the word to the left of the cursor.",
    category: "Document"
  },
  {
    hotkeys: ["Control", "W"],
    description: "In Finder window -> Close the active window.",
    category: "Native"
  },
  {
    hotkeys: ["Control", "N"],
    description: "In Finder window -> Open a new window.",
    category: "Native"
  },
  {
    hotkeys: ["Control", "F"],
    description: "In Finder window -> Select the search box.",
    category: "Native"
  },
  {
    hotkeys: ["Control", "E"],
    description: "In Finder window -> Select the search box.",
    category: "Native"
  },
  {
    hotkeys: ["Alt", "D"],
    description: "In Finder window -> Select the address bar.",
    category: "Native"
  },
  {
    hotkeys: ["Control", "Shift", "N"],
    description: "In Finder window -> Create a new folder.",
    category: "Native"
  },
  {
    hotkeys: ["Control", "Escape"],
    description: "Open Start window.",
    category: "Native"
  },
  {
    hotkeys: ["Control", "Shift", "Escape"],
    description: "Open Task Manager.",
    category: "Native"
  },
  {
    hotkeys: ["Alt", "F4"],
    description: "Close the active item, or exit the active app.",
    category: "Native"
  },
  {
    hotkeys: ["Alt", "Tab"],
    description: "Switch between open apps.",
    category: "Native"
  },
  {
    hotkeys: ["Meta", "L"],
    description: "🔒 Lock your PC.",
    category: "Native"
  },
  {
    hotkeys: ["Meta", "D"],
    description: "Display and hide the desktop.",
    category: "Native"
  },
  {
    hotkeys: ["Meta", "."],
    description: "Open emoji panel.",
    category: "Native"
  },
  {
    hotkeys: ["Meta", ";"],
    description: "Open emoji panel.",
    category: "Native"
  }
];