import React, { useContext, useEffect, useState } from "react";
import { Grid, Typography, ListItem, ListItemText, List, IconButton, ListItemSecondaryAction } from "@material-ui/core";
import { Server } from "../../api/server";
import { AppContext } from "../../Context";
import EditIcon from "@material-ui/icons/Edit";

export const CollectionsList = () => {
    const { token } = useContext(AppContext);
    const [collections, setCollections] = useState([
        { name: "collectionName", id: "12312" },
        { name: "secondCollectionName", id: "112" },
    ]);

    function getCollections(result) {
        if (!result.error) setCollections(result);
    }

    useEffect(() => {
        //Server.getUserCollections(token, getCollections);
    }, [token]);

    function handleEditClick(event) {
        const id = event.currentTarget.value;
        console.log(id);
    }

    return (
        <Grid item xs={12}>
            <List>
                <Typography variant="h6">Collections of Questions</Typography>
                <List>
                    {collections.map((collection) => {
                        console.log(collection);
                        return (
                            <ListItem key={collection.id}>
                                <ListItemText primary={collection.name} />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        color="primary"
                                        edge="end"
                                        aria-label="edit"
                                        value={collection.id}
                                        onClick={handleEditClick}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        );
                    })}
                </List>
            </List>
        </Grid>
    );
};
