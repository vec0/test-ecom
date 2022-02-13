import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySelections = createSelector(
  [selectDirectory],
  (dir) => dir.sections
);
