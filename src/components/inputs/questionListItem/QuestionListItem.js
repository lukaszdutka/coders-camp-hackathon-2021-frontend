import {
    Collapse,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Tooltip,
} from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import SendIcon from "@material-ui/icons/Send";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const QuestionListItem = ({ question }) => {
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
        setIsActive(true);
    };

    const listAnswers = () => {
        if (!question || !question.answers || question.answers.length === 0) {
            return <ListItemText>No answers</ListItemText>;
        }
        return question.answers.map((answer, index) => {
            return <ListItemText key={index}>{answer}</ListItemText>;
        });
    };

    return (
        <ListItem key={question.id} disabled={isGrayedOut} button onClick={itemClicked}>
            <ListItemIcon>
                <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItem>
                <Tooltip title={"Ask this question"}>
                    <ListItemText primary={`${question.text}`} />
                </Tooltip>
            </ListItem>
            <Collapse in={true} unmountOnExit>
                <List>{listAnswers()}</List>
            </Collapse>
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
    question: PropTypes.object,
    onItemClicked: PropTypes.func,
};
