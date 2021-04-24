import React from "react";
import { Grid, Typography, List, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { QuestionEdit } from "../forms/QuestionEdit";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    smallPadding: {
        padding: "20px",
    },
}));

export const QuestionsList = ({ questionsArray, updateQuestion, addQuestion }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <List>
                <Typography className={classes.smallPadding} variant="h5">
                    Collection
                </Typography>
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
