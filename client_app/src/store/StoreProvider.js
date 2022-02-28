import { useReducer, useMemo, createContext, useContext} from 'react'
import message,{messageState} from "./reducers/messageReducer";

const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

const initialState = { message: messageState}; // some state for props a, b
const rootReducer = combineReducers({message});

const Context = createContext()
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const store = useMemo(() => [state, dispatch], [state]);
  return (
    <Context.Provider value={store}>
        <Context.Consumer>
            {
                () => children
            }
        </Context.Consumer>
    </Context.Provider>
  );
};

export const useStore =(setterOnly = false) => {
    const [state, dispatch] = useContext(Context)
    return  setterOnly ? [dispatch] : [state, dispatch]
}

export default StoreProvider