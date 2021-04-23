import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const Store = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  return <AppContext.Provider value={{ isLogged, setIsLogged }}>{children}</AppContext.Provider>;
};

Store.propTypes = {
  children: PropTypes.node.isRequired,
};
