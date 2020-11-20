export enum RootTypes {
  TOGGLE_LEFT = "@root/TOGGLE",
}

export interface RootState {
  leftMenuExpanded: boolean;
}

export interface HandleMenuAction {
  type: string;
  payload: boolean;
}
