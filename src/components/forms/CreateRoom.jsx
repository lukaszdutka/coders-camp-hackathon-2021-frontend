import React, { useContext, useEffect, useState } from "react";
import { Button, FormGroup, TextField, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";
import { Server } from "../../api/server";
import { AppContext } from "../../Context";

const validationSchema = yup.object({
    roomName: yup.string("Enter room name").required("Name of room is required"),
});

export const CreateRoom = () => {
    const { token } = useContext(AppContext);
    const [collections, setCollections] = useState([]);

    const onSubmit = (values) => {
        console.log(values);
    };

    function getCollections(result) {
        if (!result.error) setCollections(result);
    }

    const formik = useFormik({
        initialValues: {
            roomName: "",
            collectionsSelect: "",
        },
        validationSchema: validationSchema,
        onSubmit,
    });

    useEffect(() => {
        Server.getUserCollection(token, getCollections);
    }, [token]);

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
                <FormControl>
                    <InputLabel>Collections of questions</InputLabel>
                    <Select
                        labelId="collectionsSelect"
                        id="collectionsSelect"
                        value={formik.values.collectionsSelect}
                        name="collectionsSelect"
                        onChange={formik.handleChange}
                    >
                        <MenuItem value="None">
                            <em>None</em>
                        </MenuItem>
                        {collections.map(({ name, id }) => (
                            <MenuItem key={id} value={id}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button type="submit">Submit</Button>
            </FormGroup>
        </form>
    );
};
