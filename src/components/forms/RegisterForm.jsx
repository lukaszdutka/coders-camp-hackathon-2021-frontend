import React, { useState } from "react";
import { FormGroup, Button, CircularProgress } from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";

import { EmailInput, PasswordInput } from "../inputs";
import { Server } from "../../api/server";
import { UsernameInput } from "../inputs/usernameInput/name";

export const RegisterForm = ({ setAction }) => {
    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState(false);

    const validationSchema = yup.object({
        email: yup.string("Enter email").email("Enter a valid email").required("Email is required"),
        password: yup
            .string("Enter your password")
            .required("Password is required")
            .min(8, "Password should be of minimum 8 characters length")
            .max(20, "Password can't be longer than 20 characters.")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
            ),
        name: yup.string("Enter your name").required("Name is required"),
    });

    const onSubmit = async (values, { setSubmitting }) => {
        setFormError("");
        if (!loading) setLoading(() => true);
        const result = await Server.register(values);
        if (result.error) {
            if (result.statusCode === 401) {
                setFormError("Invalid credentials");
            } else {
                setFormError("Something went wrong");
            }
            setSubmitting(false);
        } else {
            setSubmitting(false);
            setFormError("Account successfully created!")
            setTimeout(() => setAction('login'), 2000);
        }
        setLoading(() => false);
    };

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema,
        onSubmit,
    });

    return (
        <form className="register" onSubmit={formik.handleSubmit}>
            <FormGroup>
                <UsernameInput
                    errors={formik.errors.name}
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
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
                        Register
                    </Button>
                    {loading && <CircularProgress size={24} />}
                </div>
            </FormGroup>
        </form>
    );
};
