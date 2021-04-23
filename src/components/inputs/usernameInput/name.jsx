import React from "react";
import { FormHelperText, FormControl, InputLabel, Input } from "@material-ui/core";
import PropTypes from "prop-types";

export const UsernameInput = ({ id, name, errors, onChange }) => {
    return (
        <FormControl fullWidth>
            <InputLabel htmlFor={id}>Name</InputLabel>
            <Input
                error={!!errors}
                id={id}
                name={name}
                onChange={(e) => onChange(e)}
                aria-describedby="email-input-field"
            />
            <FormHelperText>{errors ? errors : ""}</FormHelperText>
        </FormControl>
    );
};

UsernameInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
