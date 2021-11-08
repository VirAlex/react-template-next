import React, { useState, useReducer, createContext, useContext} from "react";

export const VisibilityContext = createContext();

// // Initiate state
// const initialState = {
//   searchVisible: false,
//   federatedSearchVisible: false,
//   catOne: false,
//   catTwo: false,
//   homepage: false,
// };

// Create a reducer with actions
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE_FEDERATED":
//       return {
//         federatedSearchVisible: [action.payload],
//       };
//       case "RESET_ALL_STATES":
//         return{
//           federatedSearchVisible: false,
//           searchVisible: false,
//           homepage: false
//         }
//     default:
//       throw new Error();
//   }
// };

// Export the context with state and dispatch
// export const VisibilityProvider = (props) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <VisibilityContext.Provider value={[state, dispatch]}>
//       {props.children}
//     </VisibilityContext.Provider>
//   );
// };


// HUGO TEST with HOOK
//________________________________________________________________


const visibilityContext = createContext();

export const ProvideVisibility = ({children}) => {
  const visibility  = useProvideVisibility()
  return (
  <visibilityContext.Provider value={visibility}>
    {children}
  </visibilityContext.Provider>
  )
}

export const useVisibility = () => {
  return useContext(visibilityContext)
}

function useProvideVisibility(){
  const [federatedSearchVisible, setfederatedSearchVisible] = useState(false)


  const onChangeFederated = (e) => {
    setfederatedSearchVisible(true)
  }

  return {
    federatedSearchVisible,
    onChangeFederated
  }
}
