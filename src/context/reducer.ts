export interface IFAppState {
  user?: string;
  app: AppState;
}

interface AppState {
  currentPage: String;
}

export type ACTION_TYPE = { type: "SET_CURRENT_PAGE"; currentPage: string };

export const appReducer = (state: IFAppState, action: ACTION_TYPE) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        app: { ...state.app, currentPage: action.currentPage },
      };

    default:
      return state;
  }
};
