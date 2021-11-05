import React, { useState, createContext } from "react";

export const VisibilityContext = createContext();

export const VisibilityProvider = props => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [federatedSearchVisible, setFederatedSearchVisible] = useState(false);
  const [catOne, setCatOne] = useState(false);
  const [catTwo, setCatTwo] = useState(false);
  const [homepage, setHomepage] = useState(false);
  return (
    <VisibilityContext.Provider value={[searchVisible, setSearchVisible]}>
      {props.children}
    </VisibilityContext.Provider>
  );
};
