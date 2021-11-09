import React, { useState, createContext, useContext} from "react";



const queryContext = createContext();

export const ProvideQuery = ({children}) => {
  const query  = useProvideQuery()
  return (
  <queryContext.Provider value={query}>
    {children}
  </queryContext.Provider>
  )
}

export const useQuery = () => {
  return useContext(queryContext)
}

function useProvideQuery(){
  const [getQuery, setGetQuery] = useState(null)


//   const onChangeFederated = (e) => {
//     setfederatedSearchVisible(true)
//   }

  return {
    getQuery,
    setGetQuery,
  }
}