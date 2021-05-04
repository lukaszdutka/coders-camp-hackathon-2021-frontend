import { Button, Paper, Typography } from "@material-ui/core";
import { Rooms } from "../../api/rooms";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
    guestQuestionItemsContainer: {
        // justifyContent: "center",
        // alignItems: "center",
        padding: "2rem",
        // margin: "2rem",
        minWidth: "40vw",
        lineHeight: "3rem",
        textAlign: "center",
    },
    guestQuestionItemAnswer: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        // display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        margin: "2rem",
        padding: "2rem",
        // lineHeight: "3rem",
        textAlign: "center",
    },
    guestQuestionItemAnswerButton: {
        display: "flex",
        flexDirection: "column",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // margin: "2rem",
        padding: "0.5rem",
        // lineHeight: "3rem",
        textAlign: "center",
    },
}));
export const Question = ({
    question: {
        activeQuestion: { _id, answers, text, timeForAnswer, updatedAt },
    },
    setActiveQuestion,
    roomId,
    email,
}) => {
    const classes = useStyles();

    const [seconds, setSeconds] = useState(timeForAnswer);
    const [counter, setCounter] = useState(timeForAnswer);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                setSeconds(counter);
                setCounter((counter) => counter - 1);
            }, 1000);
        }

        if (counter === -1) {
            setIsActive(false);
            handleAnswer(-1).then();
        }

        return () => clearInterval(intervalId);
    }, [isActive, counter]);

    const handleAnswer = async (index) => {
        const res = await Rooms.postAnswer(roomId, _id, index, email);
        console.log(roomId, _id, index, email);
        if (res.error) console.log(res.error);
        if (!res.error) console.log(res);
    };

    const answerList = answers.map((answer, index) => (
        <div className={classes.guestQuestionItemAnswerButton}>
            <Button variant="contained" color="secondary" onClick={() => handleAnswer(index)}>
                {answer}
            </Button>
        </div>
    ));
    return (
        <Paper>
            <div className={classes.guestQuestionItemsContainer}>
                <Typography variant="h6">{text}</Typography>
                <Typography variant="h4">
                    {seconds} {seconds > 1 ? "seconds left" : "second left"}
                </Typography>
                <div className={classes.guestQuestionItemAnswer}>{answers && answerList}</div>
            </div>
        </Paper>
    );
};
