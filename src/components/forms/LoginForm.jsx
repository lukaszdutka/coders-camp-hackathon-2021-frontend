import React, { useContext, useState } from "react";
import { FormGroup, Button, CircularProgress } from "@material-ui/core";
import * as yup from "yup";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { EmailInput, PasswordInput } from "../inputs";
import { AppContext } from "../../Context";
import { Server } from "../../api/server";

export const LoginForm = () => {
    const history = useHistory();
    const storeContext = useContext(AppContext);
    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState(false);

    const validationSchema = yup.object({
        email: yup.string("Enter email").email("Enter a valid email").required("Email is required"),
        password: yup
            .string("Enter your password")
            .min(8, "Password should be of minimum 8 characters length")
            .required("Password is required"),
    });

    const onSubmit = async (values, { setSubmitting }) => {
        setFormError("");
        if (!loading) setLoading(() => true);
        const result = await Server.login(values);

        if (result.error) {
            if (result.statusCode === 401) {
                setFormError("Invalid credentials");
            } else {
                setFormError("Something went wrong");
            }
            setSubmitting(false);
        } else {
            setSubmitting(false);
            history.push("/");
        }
        setLoading(() => false);
    };

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema,
        onSubmit,
    });

    return (
        <form className="login" onSubmit={formik.handleSubmit}>
            <FormGroup>
                <EmailInput
                    errors={formik.errors.email}
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <PasswordInput
                    errors={formik.errors.password}
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <div id="formError">{formError}</div>
                <div>
                    <Button variant="outlined" color="primary" type="submit" disabled={formik.isSubmitting}>
                        Login
                    </Button>
                    {loading && <CircularProgress size={24} />}
                </div>
            </FormGroup>
        </form>
    );
};

LoginForm.propTypes = {
    formik: PropTypes.object,
    formError: PropTypes.string,
    loading: PropTypes.bool,
};
