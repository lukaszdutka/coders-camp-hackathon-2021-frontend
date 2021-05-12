import { IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Tooltip } from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import SendIcon from "@material-ui/icons/Send";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { Rooms } from "../../../api/rooms";
import { AppContext } from "../../../Context";

export const QuestionListItem = ({ question, roomId }) => {
    const { token } = useContext(AppContext);

    const defaultTime = question.timeForAnswer !== undefined ? question.timeForAnswer : 10;
    const [seconds, setSeconds] = useState(defaultTime);
    const [counter, setCounter] = useState(defaultTime);
    const [isActive, setIsActive] = useState(false);
    const [isGrayedOut, setIsGrayedOut] = useState(false);

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
            setIsGrayedOut(true);
        }

        return () => clearInterval(intervalId);
    }, [isActive, counter]);

    const itemClicked = () => {
        if (!isActive) {
            Rooms.pushActiveQuestion(roomId, { selectedQuestionId: question._id }, token);
        }
        setIsActive(true);
    };

    //const listAnswers = () => {
    // todo: list answers
    // if (!question || !question.answers || question.answers.length === 0) {
    //     return <ListItemText>No answers</ListItemText>;
    // }
    // return question.answers.map((answer, index) => {
    //     return <ListItemText key={index}>{answer}</ListItemText>;
    // });
    //  return undefined;
    //};

    return (
        <ListItem disabled={isGrayedOut} button onClick={itemClicked}>
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
                    <IconButton disabled={isGrayedOut} edge="end" aria-label="delete" onClick={itemClicked}>
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
};
