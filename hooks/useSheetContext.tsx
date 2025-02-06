// TaskContext.js
import { SheetAction, SheetState } from "@/types/SheetContext";
import React, { createContext, useContext, useReducer } from "react";
import uuid from "react-native-uuid";

const initialState = {
  trackers: [],
};

const SheetContext = createContext<{
  state: SheetState;
  dispatch: React.Dispatch<SheetAction>;
}>({ state: initialState, dispatch: () => {} });

const sheetReducer = (state: SheetState, action: SheetAction) => {
  switch (action.type) {
    case "Set State":
      return action.payload;
    case "Add Tracker":
      return {
        ...state,
        trackers: [
          ...state.trackers,
          {
            current: 3,
            maximum: 6,
            label: "Tracker",
            id: uuid.v4(),
          },
        ],
      };
    case "Update Tracker":
      const i = action.payload.index;
      const tracker = state.trackers[i];
      state.trackers[i] = {
        ...tracker,
        ...action.payload.value,
      };
      return { ...state };
    case "Delete Tracker":
      return {
        ...state,
        trackers: state.trackers.toSpliced(action.payload, 1),
      };
    default:
      return state;
  }
};

export const SheetProvider = (props: { [x: string]: any }) => {
  const [state, dispatch] = useReducer(sheetReducer, initialState);

  return (
    <SheetContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SheetContext.Provider>
  );
};

export const useSheetContext = () => useContext(SheetContext);
