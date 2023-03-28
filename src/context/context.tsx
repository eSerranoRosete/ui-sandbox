import {
  createContext,
  type Dispatch,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { type IFAppState, appReducer, type ACTION_TYPE } from "./reducer";

type Actions = Dispatch<ACTION_TYPE>;
type ActionsContextType = ReturnType<typeof actions>;

// Actions for the app
const actions = (dispatch: Actions) => ({
  setCurrentPage: (currentPage: string) => {
    dispatch({ type: "SET_CURRENT_PAGE", currentPage });
  },
});

const StateContext = createContext<IFAppState>({} as any);
const ActionsContext = createContext<ActionsContextType>({} as any);

interface IFProps {
  children: React.ReactNode;
}

const initialState: IFAppState = {
  app: {
    currentPage: "Home",
  },
};

// Provider for the app
export const AppProvider = ({ children }: IFProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const appActions = useMemo(() => actions(dispatch), []);

  return (
    <StateContext.Provider value={state}>
      <ActionsContext.Provider value={appActions}>
        {children}
      </ActionsContext.Provider>
    </StateContext.Provider>
  );
};

export const useAppState = () => {
  const state = useContext(StateContext);
  return state;
};

export const useAppActions = () => {
  const dispatch = useContext(ActionsContext);
  return dispatch;
};
