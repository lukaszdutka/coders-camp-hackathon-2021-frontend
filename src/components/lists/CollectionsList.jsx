import React, { useContext, useEffect, useState } from "react";
import {
    Typography,
    ListItem,
    ListItemText,
    List,
    IconButton,
    ListItemSecondaryAction,
    CircularProgress,
} from "@material-ui/core";
import { Collections } from "../../api/collections";
import { AppContext } from "../../Context";
import EditIcon from "@material-ui/icons/Edit";
// import AnimatedModal from "../modals/AnimatedModal";
// import { QuestionsList } from "./QuestionsList";

export const CollectionsList = () => {
    const { token } = useContext(AppContext);
    const [collections, setCollections] = useState([]);

    async function getCollections(result) {
        const collections = await result;

        if (!collections.error) setCollections(collections);
    }

    useEffect(() => {
        getCollections(Collections.getAllCollections(token));
    }, [token]);

    function handleEditClick(event) {
        const id = event.currentTarget.value;
        console.log(id);
    }

    return (
        <>
            {/*<AnimatedModal>*/}
            {/*    <QuestionsList />*/}
            {/*</AnimatedModal>*/}
            <List>
                <Typography variant="h6">Collections of Questions</Typography>
                {!!collections.length ? (
                    collections.map((collection) => {
                        console.log(collection);
                        return (
                            <ListItem key={collection._id}>
                                <ListItemText primary={collection.name} />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        color="primary"
                                        edge="end"
                                        aria-label="edit"
                                        value={collection._id}
                                        onClick={handleEditClick}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        );
                    })
                ) : (
                    <CircularProgress />
                )}
            </List>
        </>
    );
};
