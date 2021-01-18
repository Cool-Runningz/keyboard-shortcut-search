export const SYMBOLS = {
  Cmd: "⌘",
  Ctrl: "⌃",
  Option: "⌥",
  Shift: "⇧"
};

export const shortcutsData = [
  {
    keys: ["Cmd", "Space"],
    description: "🔍 Show or hide the Spotlight search field",
    category: "Mac"
  },
  {
    keys: ["Cmd", "Tab"],
    description:
      "While holding command, press the TAB key to move forward between the open apps (from left to right)",
    category: "Mac"
  },
  {
    keys: ["Cmd", "`"],
    description:
      "While holding command, press the backquote (`) key to move backwards between the open apps (from right to left)",
    category: "Mac"
  },
  {
    keys: ["Ctrl", "Cmd", "Space"],
    description:
      "Show the Character Viewer, from which you can choose emoji and other symbols.",
    category: "Mac"
  },
  {
    keys: ["Cmd", "M"],
    description: "Minimize the front window to the Dock.",
    category: "Mac"
  },
  {
    keys: ["Cmd", ","],
    description: "Open preferences for the front app.",
    category: "Mac"
  },
  {
    keys: ["Option", "Cmd", "D"],
    description: "Show or hide the Dock.",
    category: "Mac"
  },
  {
    keys: ["Cmd", "Shift", "3"],
    description: "📸 Take a screenshot of your whole screen.",
    category: "Mac"
  },
  {
    keys: ["Cmd", "Shift", "4"],
    description:
      "📸 Take a screenshot of a portion of your screen. This command presents a crosshair icon and from there you can drag to select the portion of the screen you want to capture",
    category: "Mac"
  },
  {
    keys: ["Cmd", "Shift", "5"],
    description:
      "📸 Provides a slew of screen capture options like recording a selected portion of the screen and selecting the location you would like your screen capture to be saved to.",
    category: "Mac"
  },
  {
    keys: ["Shift", "Cmd", "D"],
    description: "In Finder window → Open the desktop folder",
    category: "Mac"
  },
  {
    keys: ["Shift", "Cmd", "I"],
    description: "In Finder window → Open the iCloud Drive",
    category: "Mac"
  },
  {
    keys: ["Option", "Cmd", "L"],
    description: "In Finder window → Open the Downloads folder.",
    category: "Mac"
  },
  {
    keys: ["Shift", "Cmd", "N"],
    description: "In Finder window → Create a new folder.",
    category: "Mac"
  },
  {
    keys: ["Ctrl", "Cmd", "Q"],
    description: "🔒 Immediately lock your screen.",
    category: "Mac"
  },
  {
    keys: ["Cmd", "N"],
    description: "Opens a new browser window.",
    category: "Browser"
  },
  {
    keys: ["Cmd", "Shift", "N"],
    description: "Opens a new tab in Incognito mode.",
    category: "Browser"
  },
  {
    keys: ["Cmd", "L"],
    description: "Shifts focus to the address bar.",
    category: "Browser"
  },
  {
    keys: ["Cmd", "W"],
    description: "Close the current tab or pop-up.",
    category: "Browser"
  },
  {
    keys: ["Cmd", "T"],
    description: "Open a new tab, and jump to it",
    category: "Browser"
  },
  {
    keys: ["Cmd", "9"],
    description: "Jump to the last tab",
    category: "Browser"
  },
  {
    keys: ["F12"],
    description: "Open Developer Tools",
    category: "Browser"
  },
  {
    keys: ["Cmd", "F"],
    description: "Open the Find Bar to search the current page.",
    category: "Browser"
  },
  {
    keys: ["Cmd", "+"],
    description: "Make everything on the page bigger (Zoom in).",
    category: "Browser"
  },
  {
    keys: ["Cmd", "-"],
    description: "Make everything on the page smaller (Zoom out).",
    category: "Browser"
  },
  {
    keys: ["Cmd", "0"],
    description: "Reset page zoom level.",
    category: "Browser"
  },
  {
    keys: ["Cmd", "`"],
    description:
      "Switches you between windows (if you have multiple browser windows open)",
    category: "Browser"
  },
  {
    keys: ["Ctrl", "Tab"],
    description: "Move forward to the next tab (to the right)",
    category: "Browser"
  },
  {
    keys: ["Ctrl", "Shift", "Tab"],
    description: "Move backward to the previous tab (to the left)",
    category: "Browser"
  },
  {
    keys: ["Cmd", "Z"],
    description: "Undo the previous command.",
    category: "Document"
  },
  {
    keys: ["Cmd", "Shift", "Z"],
    description: "Redo the previous command.",
    category: "Document"
  },
  {
    keys: ["Cmd", "C"],
    description:
      "Copy the selected item to the Clipboard. This also works for files in the Finder.",
    category: "Document"
  },
  {
    keys: ["Cmd", "A"],
    description: "Select all items.",
    category: "Document"
  },
  {
    keys: ["Cmd", "V"],
    description:
      "Paste the contents of the Clipboard into the current document or app. This also works for files in the Finder.",
    category: "Document"
  },
  {
    keys: ["Cmd", "F"],
    description: "Find items in a document or open a Find window.",
    category: "Document"
  },
  {
    keys: ["Cmd", "S"],
    description: "Save the current document.",
    category: "Document"
  },
  {
    keys: ["Cmd", "B"],
    description: "Make the selected text bold, or turn bold on or off",
    category: "Document"
  },
  {
    keys: ["Cmd", "I"],
    description: "Italicize the selected text, or turn italics on or off.",
    category: "Document"
  },
  {
    keys: ["Cmd", "K"],
    description: "Create a hyperlink.",
    category: "Document"
  },
  {
    keys: ["Cmd", "U"],
    description: "Underline the selected text, or turn underlining on or off.",
    category: "Document"
  },
  {
    keys: ["Cmd", "ArrowUp"],
    description: "Move the insertion point to the beginning of the document.",
    category: "Document"
  },
  {
    keys: ["Cmd", "ArrowDown"],
    description: "Move the insertion point to the end of the document.",
    category: "Document"
  },
  {
    keys: ["Cmd", "ArrowLeft"],
    description:
      "Move the insertion point to the beginning of the current line.",
    category: "Document"
  },
  {
    keys: ["Cmd", "ArrowRight"],
    description: "Move the insertion point to the end of the current line.",
    category: "Document"
  },
  {
    keys: ["Option", "ArrowLeft"],
    description:
      "Move the insertion point to the beginning of the previous word.",
    category: "Document"
  },
  {
    keys: ["Option", "ArrowRight"],
    description: "Move the insertion point to the end of the next word.",
    category: "Document"
  },
  {
    keys: ["Shift", "Cmd", "ArrowUp"],
    description:
      "Select the text between the insertion point and the beginning of the document.",
    category: "Document"
  },
  {
    keys: ["Shift", "Cmd", "ArrowDown"],
    description:
      "Select the text between the insertion point and the end of the document.",
    category: "Document"
  },
  {
    keys: ["Shift", "Cmd", "ArrowLeft"],
    description:
      "Select the text between the insertion point and the beginning of the current line.",
    category: "Document"
  },
  {
    keys: ["Shift", "Cmd", "ArrowRight"],
    description:
      "Select the text between the insertion point and the end of the current line.",
    category: "Document"
  },
  {
    keys: ["Option", "Shift", "Cmd", "V"],
    description:
      "Paste and Match Style: Apply the style of the surrounding content to the item pasted within that content.",
    category: "Document"
  },
  {
    keys: ["Option", "Delete"],
    description: "Delete the word to the left of the insertion point.",
    category: "Document"
  },
  {
    keys: ["Ctrl", "D"],
    description:
      "Delete the character to the right of the insertion point. (Forward Delete)",
    category: "Document"
  }
];
