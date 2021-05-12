import { IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Tooltip } from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import SendIcon from "@material-ui/icons/Send";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { Rooms } from "../../../api/rooms";
import { AppContext } from "../../../Context";

export const QuestionListItem = ({ question, roomId, isQuestionActive, setIsQuestionActive }) => {
    const { token } = useContext(AppContext);

    const defaultTime = question.timeForAnswer !== undefined ? question.timeForAnswer : 10;
    const [seconds, setSeconds] = useState(defaultTime);
    const [counter, setCounter] = useState(defaultTime);
    const [hasBeenSent, setHasBeenSent] = useState(false);
    const [isGrayedOut, setIsGrayedOut] = useState(false);

    useEffect(() => {
        let intervalId;

        if (hasBeenSent) {
            intervalId = setInterval(() => {
                setSeconds(counter);
                setCounter((counter) => counter - 1);
            }, 1000);
        }

        if (counter === -1) {
            setHasBeenSent(false);
            setIsQuestionActive(false);
            setIsGrayedOut(true);
        }

        return () => clearInterval(intervalId);
    }, [hasBeenSent, counter]);

    const itemClicked = () => {
        if (!hasBeenSent && !isQuestionActive) {
            Rooms.pushActiveQuestion(roomId, { selectedQuestionId: question._id }, token);
            setIsQuestionActive(true);
            setHasBeenSent(true);
        }
    };

    const listAnswers = () => {
        // todo: list answers
        // if (!question || !question.answers || question.answers.length === 0) {
        //     return <ListItemText>No answers</ListItemText>;
        // }
        // return question.answers.map((answer, index) => {
        //     return <ListItemText key={index}>{answer}</ListItemText>;
        // });
        return undefined;
    };

    return (
        <ListItem disabled={isGrayedOut || hasBeenSent} button onClick={itemClicked}>
            <ListItemIcon>
                <QuestionAnswerIcon />
            </ListItemIcon>
            <Tooltip title={"Ask this question"}>
                <ListItemText primary={`${question.text}`} />
            </Tooltip>
            {/*<Collapse in={true} unmountOnExit>*/}
            {/*    <List>{listAnswers()}</List>*/}
            {/*</Collapse>*/}
            {seconds}
            <ListItemSecondaryAction>
                <Tooltip title={"Ask this question"}>
                    <IconButton
                        disabled={hasBeenSent || isQuestionActive || isGrayedOut}
                        edge="end"
                        aria-label="delete"
                        onClick={itemClicked}
                    >
                        <SendIcon />
                    </IconButton>
                </Tooltip>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

QuestionListItem.propTypes = {
    question: PropTypes.object.isRequired,
    roomId: PropTypes.string.isRequired,
    isQuestionActive: PropTypes.bool.isRequired,
    setIsQuestionActive: PropTypes.func.isRequired,
};
