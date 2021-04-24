import React, { useContext, useEffect, useState } from "react";
import {
    FormHelperText,
    CircularProgress,
    Button,
    FormGroup,
    TextField,
} from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";
import { Rooms } from "../../api/rooms";

const validationSchema = yup.object({
    email: yup.string("Enter your e-mail").required("E-mail is required"),
    name: yup.string("Enter your name").required("Name is required"),
});

export const GuestForm = ({ roomId, setGuestEmail, setGuestName }) => {
    const [error, setError] = useState("");

    const onSubmit = async (values) => {
        setError(<CircularProgress />);
        const result = await Rooms.updateGuests(roomId, { email: values.email, name: values.name });
        if (!result.error) {
            setError("You successfully entered the room!");
            setGuestEmail(values.email);
            setGuestName(values.name);
            formik.values.email = "";
            formik.values.name = "";
        } else {
            setError("Something went wrong");
        }
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
        },
        validationSchema: validationSchema,
        onSubmit,
    });
    return (
        <form noValidate autoComplete="off" className="createRoom" onSubmit={formik.handleSubmit}>
            <FormGroup>
                <TextField
                    placeholder="Your e-mail"
                    name="email"
                    id="email"
                    label="Your e-mail"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    placeholder="Your name"
                    name="name"
                    id="name"
                    label="Your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <FormHelperText error>{error}</FormHelperText>
                <Button type="submit">Submit</Button>
            </FormGroup>
        </form>
    );
};
