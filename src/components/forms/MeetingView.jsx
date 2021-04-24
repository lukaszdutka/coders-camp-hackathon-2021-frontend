import "../../App.css";
import { Container, List, ListItem, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { QuestionListItem } from "../inputs";

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

    const listItems = () => {
        if (!questions || questions.length === 0) {
            return <ListItem> There are no questions </ListItem>;
        }
        return questions.map((question) => {
            return <QuestionListItem key={question.id} question={question} />;
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
