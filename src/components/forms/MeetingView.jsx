import "../../App.css";
import {
    Container,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    makeStyles,
    Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

export const MeetingView = ({ roomId }) => {
    const classes = useStyles();
    const [questions, setQuestions] = useState([]);
    const [timeLeft, setTimeLeft] = useState(120);

    useEffect(() => {
        setQuestions(getQuestionsByRoomId(roomId));
    }, [roomId]);

    const getQuestionsByRoomId = (roomId) => {
        console.log("Questions got from server"); //todo api call
        return [
            {
                id: "1",
                text: "What is love?",
            },
            {
                id: "2",
                text: "Baby don't hurt me?",
            },
            {
                id: "3",
                text: "What is REST?",
            },
        ];
    };

    const setQuestionAsAsked = (questionId) => {
        console.log(`Question is set as asked: ${questionId}`); //todo api call
        setTimeout(() => {
            console.log(questions.filter((q) => q.id !== questionId));
            setQuestions(questions.filter((q) => q.id !== questionId));
        }, 10000);
    };

    const doOnFinish = (questionId) => {
        console.log(`Finished ${questionId}`);
    };

    const onItemClicked = (questionId) => {
        const newQuestions = questions.map((q) => {
            if (q.id === questionId) {
                return { ...q, shouldShowProgresBar: true };
            } else {
                return q;
            }
        });
        setQuestions(newQuestions);
    };

    const listItems = () => {
        if (!questions || questions.length === 0) {
            return <ListItem> There are no questions </ListItem>;
        }
        return questions.map((question) => {
            return (
                <ListItem key={question.id} button onClick={() => onItemClicked(question.id)}>
                    <ListItemIcon>
                        <QuestionAnswerIcon />
                    </ListItemIcon>
                    <ListItemText primary={`${question.text}`} />
                    {/*{question.shouldShowProgresBar && <FixedTimeProgressBar onFinish={() => doOnFinish(question.id)} />}*/}
                    {timeLeft}
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => onItemClicked(question.id)}>
                            <SendIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            );
        });
    };
    return (
        <Container maxWidth="sm" style={{ paddingTop: "40%" }}>
            <Typography variant="h6">Questions</Typography>
            <div className={classes.demo}>
                <List>{listItems()}</List>
            </div>
        </Container>
    );
};

MeetingView.propTypes = {
    roomId: PropTypes.string,
    // formError: PropTypes.string,
    // loading: PropTypes.bool,
};
