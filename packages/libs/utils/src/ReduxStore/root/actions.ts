import { RootTypes, HandleMenuAction } from "./types";

export function handleLeftMenu(status: boolean): HandleMenuAction {
  return {
    type: RootTypes.TOGGLE_LEFT,
    payload: status,
  };
}
