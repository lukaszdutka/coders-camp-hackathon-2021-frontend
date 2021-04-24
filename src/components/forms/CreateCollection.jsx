import React, { useContext, useState } from "react";
import { FormHelperText, Button, FormGroup, TextField } from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";
import { AppContext } from "../../Context";
import { Collections } from "../../api/collections";

const validationSchema = yup.object({
    collectionName: yup.string("Enter room name").required("Name of room is required"),
});

export const CreateCollection = ({ handleClosePopup, addCollection }) => {
    const { token } = useContext(AppContext);
    const [error, setError] = useState("");
    const [isSuccessful, setIsSuccessful] = useState(false);

    const onSubmit = async (values) => {
        setError("");
        const result = await Collections.createCollection(values.collectionName, token);
        if (!result.error) {
            addCollection(result);
            setIsSuccessful(true);
            formik.values.roomName = "";
            formik.values.collectionsSelect = "";
        } else {
            setIsSuccessful(false);
            setError(result.error);
        }
    };

    const formik = useFormik({
        initialValues: {
            collectionName: "",
        },
        validationSchema: validationSchema,
        onSubmit,
    });

    return (
        <form noValidate autoComplete="off" className="createCollection" onSubmit={formik.handleSubmit}>
            <FormGroup>
                <TextField
                    placeholder="Collection name"
                    name="collectionName"
                    id="collectionName"
                    label="Collection name"
                    value={formik.values.CollectionName}
                    onChange={formik.handleChange}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <FormHelperText error>{error || formik.errors[0]}</FormHelperText>
                {!isSuccessful ? (
                    <Button type="submit">Submit</Button>
                ) : (
                    <Button onClick={handleClosePopup}>Back</Button>
                )}
            </FormGroup>
        </form>
    );
};
