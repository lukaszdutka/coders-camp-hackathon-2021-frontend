import { Button, AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
import { CodeSharp } from "@material-ui/icons";
import { Rooms } from "../../api/rooms";

export const Question = ({
    question: {
        activeQuestion: { _id, answers, text, timeForAnswer, updatedAt },
    },
    setActiveQuestion,
    roomId,
    email,
}) => {
    const handleAnswer = async (index) => {
        const res = await Rooms.postAnswer(roomId, _id, index, email);
        console.log(roomId, _id, index, email);
        if (res.error) console.log(res.error);
        if (!res.error) console.log(res);
    };

    const answerList = answers.map((answer, index) => (
        <Button variant="contained" color="secondary" onClick={() => handleAnswer(index)}>
            {answer}
        </Button>
    ));
    return (
        <Paper>
            <Typography variant="h6">{text}</Typography>
            {answers && answerList}
        </Paper>
    );
};
