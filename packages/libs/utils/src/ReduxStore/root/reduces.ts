import { Reducer } from "redux";
import { RootState, RootTypes } from "./types";

const INITIAL_STATE: RootState = {
  leftMenuExpanded: true,
};

const reducer: Reducer<RootState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RootTypes.TOGGLE_LEFT:
      return {
        ...state,
        leftMenuExpanded: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
