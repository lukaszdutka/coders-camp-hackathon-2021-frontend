import React from "react";
import { TextField, ListItem, IconButton } from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";
import SaveIcon from "@material-ui/icons/Save";
import { useStyles } from "./QuestionEdit.style";

export const QuestionEdit = ({ question, updateQuestion }) => {
    const classes = useStyles();
    const validationSchema = yup.object({
        text: yup.string().required("Question is required"),
        answer0: yup.string().required("At lest one answer is required"),
        answer1: yup.string(),
        answer2: yup.string(),
        answer3: yup.string(),
        correctAnswer: yup
            .number()
            .required("You need to pass index of correct answer")
            .min(1, "Index can't be smaller than 1")
            .max(4, "Index can't be bigger than 4"),
        timeForAnswer: yup
            .number()
            .min(15, "Time can't be shorter than 15 seconds")
            .max(120, "Time can't be longer than 120 seconds"),
    });

    const onSubmit = async (values) => {
        updateQuestion(values);
    };

    const formik = useFormik({
        initialValues: {
            _id: question._id,
            text: question.text,
            answer0: question.answers[0] || "",
            answer1: question.answers[1] || "",
            answer2: question.answers[2] || "",
            answer3: question.answers[3] || "",
            correctAnswer: question.correctAnswer ? question.correctAnswer + 1 : 1,
            timeForAnswer: question.timeForAnswer,
        },
        validationSchema,
        onSubmit,
    });

    return (
        <ListItem key={question._id}>
            <form className={classes.root} onSubmit={formik.handleSubmit}>
                <TextField
                    onChange={formik.handleChange}
                    name="text"
                    id="question"
                    label="Question"
                    value={formik.values.text}
                />
                <TextField
                    onChange={formik.handleChange}
                    name="timeForAnswer"
                    id="timeForAnswer"
                    type="number"
                    label="Time"
                    className={classes.numberTextField}
                    value={formik.values.timeForAnswer}
                />
                {[0, 1, 2, 3].map((index) => {
                    return (
                        <TextField
                            key={index}
                            id="answer"
                            label={`Answer: ${index + 1}`}
                            name={`answer${index}`}
                            value={formik.values[`answer${index}`]}
                            className={classes.answer}
                            onChange={formik.handleChange}
                        />
                    );
                })}
                <TextField
                    type="number"
                    onChange={formik.handleChange}
                    name="correctAnswer"
                    id="correctAnswer"
                    label="Correct"
                    className={classes.numberTextField}
                    value={formik.values.correctAnswer}
                />
                <IconButton
                    color="primary"
                    edge="end"
                    aria-label="edit"
                    value={question._id}
                    onClick={formik.handleSubmit}
                >
                    <SaveIcon />
                </IconButton>

                <div id="formError">{formik.errors[0]}</div>
            </form>
        </ListItem>
    );
};
