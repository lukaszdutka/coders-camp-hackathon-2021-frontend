import { Button, AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
import { CodeSharp } from "@material-ui/icons";
import { Rooms } from "../../api/rooms";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    guestQuestionItemsContainer: {
        
        // justifyContent: "center",
        // alignItems: "center",
        padding: "2rem",
        // margin: "2rem",
        minWidth: "40vw",
        lineHeight: "3rem",
        textAlign:"center",
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
        textAlign:"center",
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
        textAlign:"center",
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
        <div className={classes.guestQuestionItemAnswer}>
            {answers && answerList}
        </div>
        </div>
        </Paper>
    );
};
