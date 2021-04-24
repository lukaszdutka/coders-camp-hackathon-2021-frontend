import "../../App.css";
import { Container, Divider, Grid, List, ListItem, makeStyles, Paper, Tooltip, Typography } from "@material-ui/core";
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
    smallPadding: {
        padding: "10px",
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
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        const fetchRoom = async () => {
            let rooms = await Rooms.getRooms(token); //todo change to get single room
            let roomResponse = rooms.filter((r) => r._id === roomId)[0];

            setRoom(roomResponse);
            setCollectionName(roomResponse.questionsCollection.name);
            setQuestionIds(roomResponse.questionsCollection.questions);
            setGuests(roomResponse.guests);

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

    const listGuests = () => {
        if (!guests || guests.length === 0) {
            return <ListItem> There are no guests</ListItem>;
        }
    };

    return (
        <Container maxWidth="lg">
            <Typography variant="h4">Room {room.name}</Typography>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Paper>
                        <Typography variant="h6" className={classes.smallPadding}>
                            Questions of {collectionName}
                        </Typography>
                        <Divider />
                        <div className={classes.demo}>
                            <List>{listQuestions()}</List>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Typography variant="h6" className={classes.smallPadding}>
                            Attendants
                        </Typography>
                        <Divider />
                        <div className={classes.demo}>
                            <List>{listGuests()}</List>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

MeetingView.propTypes = {
    roomId: PropTypes.string,
    // formError: PropTypes.string,
    // loading: PropTypes.bool,
};
