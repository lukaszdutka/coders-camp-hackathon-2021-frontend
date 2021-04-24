import { IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import SendIcon from "@material-ui/icons/Send";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const QuestionListItem = ({ question, onItemClicked }) => {
    const [seconds, setSeconds] = useState(10);
    const [counter, setCounter] = useState(10);
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
        onItemClicked();
        setIsActive(true);
    };

    return (
        <ListItem disabled={isGrayedOut} key={question.id} button onClick={itemClicked}>
            <ListItemIcon>
                <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary={`${question.text}`} />
            {seconds}
            <ListItemSecondaryAction>
                <IconButton disabled={isGrayedOut} edge="end" aria-label="delete" onClick={itemClicked}>
                    <SendIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

QuestionListItem.propTypes = {
    question: PropTypes.object,
    onItemClicked: PropTypes.func,
};
