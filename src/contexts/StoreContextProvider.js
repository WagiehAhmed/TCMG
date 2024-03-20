import { createContext, useReducer } from "react";

export const storeContext = createContext();

const StoreContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ADMINS":
        return {
          admins: action.payload,
          blogs: [...state.blogs],
        };
      case "SET_BLOGS":
        return {
          admins: [...state.admins],
          blogs: action.payload,
        };
      case "ADD_ADMIN": {
        return {
          admins: [action.payload, ...state.admins],
          blogs: [...state.blogs],
        };
      }
      case "ADD_BLOG": {
        return {
          admins: [...state.admins],
          blogs: [action.payload, ...state.blogs],
        };
      }
      case "DELETE_ADMIN":
        return {
          admins: state.admins.filter((admin) => admin.id !== action.payload),
          blogs:  [...state.blogs],
        };
      case "DELETE_BLOG":
        return {
          admins:  [...state.admins],
          blogs: state.blogs.filter((blog) => blog.id !== action.payload),
        };
      default:
        return state;
    }
  };

  

  const [state, storeDispatch] = useReducer(
    reducer,
    {admins: [],blogs:[]}
  );

  return (
    <storeContext.Provider value={{...state, storeDispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;

