import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
export const AppContext = createContext();

export const Store = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [profile, setProfile] = useState(localStorage.getItem("profile") || null);

    function setNewToken(token) {
        setToken(token);
        localStorage.setItem("token", token);
    }

    function clearToken() {
        setToken("");
        localStorage.removeItem("token");
    }

    function setNewProfile(profile) {
        setProfile(profile);
        localStorage.setItem("profile", JSON.stringify(profile));
    }

    function clearProfile() {
        setProfile(null);
        localStorage.removeItem("profile");
    }

    return (
        <AppContext.Provider value={{ token, setNewToken, clearToken, profile, setNewProfile, clearProfile }}>
            {children}
        </AppContext.Provider>
    );
};

Store.propTypes = {
    children: PropTypes.node.isRequired,
};
