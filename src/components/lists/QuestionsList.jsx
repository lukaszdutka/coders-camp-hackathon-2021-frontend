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

import EditIcon from "@material-ui/icons/Edit";

export const QuestionsList = (questionsCollection) => {
    const [originalQuestions, setOriginalQuestions] = useState(questionsCollection);
    const [questions, setQuestions] = useState(questionsCollection);

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
