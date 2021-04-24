import React from "react";
import { Grid, Typography, List, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { QuestionEdit } from "../forms/QuestionEdit";

export const QuestionsList = ({ questionsArray, updateQuestion, addQuestion }) => {
    return (
        <Grid item xs={12}>
            <List>
                <Typography variant="h6">Collection</Typography>
                {!!questionsArray.length
                    ? questionsArray.map((question) => {
                          return (
                              <QuestionEdit key={question._id} question={question} updateQuestion={updateQuestion} />
                          );
                      })
                    : "This collection is empty"}
                <IconButton onClick={addQuestion}>
                    <AddIcon />
                </IconButton>
            </List>
        </Grid>
    );
};
