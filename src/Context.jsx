import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const Store = ({ children }) => {
  const [token, setToken] = useState(null);

  return <AppContext.Provider value={{ token, setToken }}>{children}</AppContext.Provider>;
};

Store.propTypes = {
  children: PropTypes.node.isRequired,
};
