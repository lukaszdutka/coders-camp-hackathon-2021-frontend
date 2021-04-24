import React, { useContext, useEffect, useState } from "react";
import {
    FormHelperText,
    CircularProgress,
    Button,
    FormGroup,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";
import { AppContext } from "../../Context";
import { Rooms } from "../../api/rooms";
import { Collections } from "../../api/collections";

const validationSchema = yup.object({
    roomName: yup.string("Enter room name").required("Name of room is required"),
});

export const CreateRoom = ({ handleClosePopup }) => {
    const { token } = useContext(AppContext);
    const [collections, setCollections] = useState([]);
    const [error, setError] = useState("");

    const onSubmit = async (values) => {
        setError(<CircularProgress />);
        const result = await Rooms.createRoom(
            { name: values.roomName, questionsCollectionId: values.collectionsSelect },
            token,
        );
        if (!result.error) {
            setError("Room successfully created!");
            formik.values.roomName = "";
            formik.values.collectionsSelect = "";
        } else {
            setError(result.error);
        }
    };

    async function getCollections(result) {
        const collectionsResponse = await result;

        if (!collectionsResponse.error) {
            setCollections(collectionsResponse.reverse());
        } else {
            setError("Something went wrong");
        }
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
        getCollections(Collections.getAllCollections(token));
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
                    <InputLabel>Collections</InputLabel>
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
                        {collections.map(({ name, _id }) => (
                            <MenuItem key={_id} value={_id}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormHelperText error>{error}</FormHelperText>
                {error !== "Room successfully created!" ? (
                    <Button type="submit">Submit</Button>
                ) : (
                    <Button onClick={handleClosePopup}>Back</Button>
                )}
            </FormGroup>
        </form>
    );
};
