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

// export const MeetingView = ({roomId}) => {
export const MeetingView = () => {
    const roomId = "6083674df431802ac14a0206";
    const { token } = useContext(AppContext);

    const classes = useStyles();
    const [questionIds, setQuestionIds] = useState([]);
    const [collectionName, setCollectionName] = useState("");
    const [room, setRoom] = useState({});

    useEffect(() => {
        const fetchRoom = async () => {
            let rooms = await Rooms.getRooms(token); //todo change to get room
            let roomResponse = rooms.filter((r) => r._id === roomId)[0];

            setRoom(roomResponse);
            setCollectionName(roomResponse.questionsCollection.name);
            setQuestionIds(roomResponse.questionsCollection.questions);
            return roomResponse;
        };
        fetchRoom();
    }, [roomId, token]);

    const listQuestions = () => {
        if (!questionIds || questionIds.length === 0) {
            return <ListItem> There are no questions </ListItem>;
        }
        return questionIds.map((questionId) => {
            return <QuestionListItem key={questionId} questionId={questionId} />;
        });
    };
    return (
        <Container maxWidth="sm">
            <Typography variant="h5">Room {room.name}</Typography>
            <Typography variant="h6">Questions of {collectionName}</Typography>
            <div className={classes.demo}>
                <List>{listQuestions()}</List>
            </div>
        </Container>
    );
};

MeetingView.propTypes = {
    roomId: PropTypes.string,
    // formError: PropTypes.string,
    // loading: PropTypes.bool,
};
