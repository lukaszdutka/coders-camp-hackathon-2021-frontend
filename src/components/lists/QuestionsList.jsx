import React, { useContext, useEffect, useState } from "react";
import {
    Grid,
    Typography,
    ListItem,
    ListItemText,
    List,
    IconButton,
    ListItemSecondaryAction,
    CircularProgress,
} from "@material-ui/core";
import { Server } from "../../api/server";
import { AppContext } from "../../Context";
import EditIcon from "@material-ui/icons/Edit";

export const QuestionsList = () => {
    const { token } = useContext(AppContext);
    const [questions, setQuestions] = useState([]);

    function getQuestions(result) {
        if (!result.error) setQuestions(result);
    }

    useEffect(() => {
        //Server.getUserCollections(token, getCollections);
    }, [token]);

    function handleEditClick(event) {
        const id = event.currentTarget.value;
        console.log(id);
    }

    return (
        <Grid item xs={6}>
            <List>
                <Typography variant="h6">Collections of Questions</Typography>
                <List>
                    {!!questions.length ? (
                        questions.map((question) => {
                            console.log(question);
                            return (
                                <ListItem key={question.id}>
                                    <ListItemText primary={question.name} />
                                    <ListItemSecondaryAction>
                                        <IconButton
                                            color="primary"
                                            edge="end"
                                            aria-label="edit"
                                            value={question.id}
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
            </List>
        </Grid>
    );
};
