import { KEYMAPS } from "../data/mappings";

export function getRandomInt(max = 1000) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Filter down to all the shortcuts based on the selected category
export const getDataFilteredByCategory = (data, category) => {
  return data.filter((item) => item.category === category);
};

/*This function performs an "incremental search."
 *     1. Assign 'indexToCompare' to the last index of the `keysToDisplay` array.
 *     2. Determine the search match by taking the eventKey and comparing it to the last index in the `keysToDisplay` array
 *
 *  It returns an array of all the matches found with the most recent key pressed.
 *    */
export const searchForIncrementalMatch = (
  eventKey,
  keysEntered,
  currentMatches,
  osValue
) => {
  const indexToCompare = keysEntered.length - 1;

  return currentMatches.filter((item) => {
    const keyToCompare = KEYMAPS[osValue][eventKey] || eventKey;
    return (
      keyToCompare.toUpperCase() === item.hotkeys[indexToCompare]?.toUpperCase()
    );
  });
};
