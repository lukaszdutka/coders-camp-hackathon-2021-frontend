import { IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import SendIcon from "@material-ui/icons/Send";
import PropTypes from "prop-types";
import { useState } from "react";

export const QuestionListItem = ({ question, onItemClicked }) => {
    const [timer, setTimer] = useState(-1);

    const itemClicked = () => {
        onItemClicked();
        if (timer === -1) {
            setTimer(10);
        }
    };

    return (
        <ListItem key={question.id} button onClick={itemClicked}>
            <ListItemIcon>
                <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary={`${question.text}`} />
            {timer >= 0 ? timer : undefined}
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={itemClicked}>
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
