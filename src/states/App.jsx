import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const initialState = {};

export const AppContext = createContext(initialState);

export const Store = ({ children }) => {
  const [state, setState] = useState(initialState);

  function changingPartOfState(newValue) {
    setState({ ...state, newValue });
  }

  return <AppContext.Provider value={{ state, changingPartOfState }}>{children}</AppContext.Provider>;
};

Store.propTypes = {
  children: PropTypes.node.isRequired,
};
