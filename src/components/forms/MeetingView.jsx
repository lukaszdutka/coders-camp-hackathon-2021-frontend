import "../../App.css";
import { Container, List, ListItem, makeStyles, Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { QuestionListItem } from "../inputs";
import { AppContext } from "../../Context";
import { Rooms } from "../../api/rooms";

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

export const MeetingView = () => {
    const roomId = "6083674df431802ac14a0206";
    const { token } = useContext(AppContext);

    const classes = useStyles();
    const [questionIds, setQuestionIds] = useState([]);
    const [collectionName, setCollectionName] = useState("");

    useEffect(async () => {
        let rooms = await Rooms.getRooms(token);
        console.log(rooms[0]);
        let room = rooms[0];
        setCollectionName(room.questionsCollection.name);
        setQuestionIds(room.questionsCollection.questions);

        // setQuestions(getQuestionsByRoomId(roomId));
    }, [roomId, token]);

    const listItems = () => {
        if (!questionIds || questionIds.length === 0) {
            return <ListItem> There are no questions </ListItem>;
        }
        return questionIds.map((questionId) => {
            return <QuestionListItem key={questionId} questionId={questionId} />;
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
