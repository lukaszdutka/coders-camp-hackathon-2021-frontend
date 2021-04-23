import React from "react";
import { Button, FormGroup, TextField } from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
    roomName: yup.string("Enter room name").required("Name of room is required"),
});

export const CreateRoom = () => {
    const onSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues: {
            roomName: "",
        },
        validationSchema: validationSchema,
        onSubmit,
    });

    return (
        <form noValidate autoComplete="off" className="createRoom" onSubmit={formik.handleSubmit}>
            <FormGroup>
                <TextField
                    placeholder="Room name"
                    name="roomName"
                    id="roomName"
                    label="Room name"
                    value={formik.values.roomName}
                    onChange={formik.handleChange}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <Button type="submit">Submit</Button>
            </FormGroup>
        </form>
    );
};
