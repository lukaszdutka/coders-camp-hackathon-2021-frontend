import {
    Button,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Paper,
    Typography,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { Prompt, useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { AppContext } from "../../Context";
import { Rooms } from "../../api/rooms";
import { QuestionListItem } from "../../components/inputs";
import "../../App.css";

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

export const Meeting = () => {
    const { id } = useParams();
    const roomId = id;
    const history = useHistory();
    const classes = useStyles();
    const { token } = useContext(AppContext);
    const [room, setRoom] = useState({});
    const [questionCollection, setQuestionCollection] = useState({});
    const [guests, setGuests] = useState([]);
    const [isQuestionActive, setIsQuestionActive] = useState(false);

    useEffect(() => {
        let interval = setInterval(async () => {
            console.log("refresh guests with: " + roomId);
            let roomResponse = await Rooms.getRoomById(roomId, token);
            setGuests(roomResponse.guests);

            return () => {
                console.log("Clear interval: " + interval + " , " + roomId);
                clearInterval(interval);
            };
        }, 2000);
        const unsubscribeHistory = history.listen(beforeRouteChange);

        return () => {
            clearInterval(interval);
            unsubscribeHistory();
        };
    }, [roomId, token]);

    useEffect(() => {
        const fetchRoom = async () => {
            let roomResponse = await Rooms.getRoomById(roomId, token);

            setRoom(roomResponse);
            setQuestionCollection(roomResponse.questionsCollection);
            setGuests(roomResponse.guests);

            return roomResponse;
        };
        fetchRoom();
    }, [roomId, token]);

    const beforeRouteChange = () => {
        Rooms.closeRoom(roomId, token);
    };

    const listQuestions = () => {
        if (!questionCollection.questions || questionCollection.questions.length === 0) {
            return <ListItem> There are no questions </ListItem>;
        }
        return questionCollection.questions.map((question) => {
            return (
                <QuestionListItem
                    key={question._id}
                    isQuestionActive={isQuestionActive}
                    setIsQuestionActive={setIsQuestionActive}
                    question={question}
                    roomId={roomId}
                />
            );
        });
    };

    const listGuests = () => {
        if (!guests || guests.length === 0) {
            return <ListItem> There are no guests</ListItem>;
        } else {
            return guests.map((guest) => (
                <ListItem key={guest.email}>
                    <ListItemText secondary={guest.email}>
                        <Typography variant="h6">{guest.name}</Typography>
                    </ListItemText>
                </ListItem>
            ));
        }
    };

    const leaveRoom = () => {
        history.push(`/summary/${roomId}`);
    };

    function navigateOutOfRoom() {
        return "Room will be closed.";
    }

    return (
        <Container maxWidth="lg" className={classes.smallPadding}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="h4" className={classes.smallPadding}>
                        Room {room.name}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        style={{ marginTop: "10px", marginLeft: "33%" }}
                        variant={"outlined"}
                        color={"primary"}
                        onClick={leaveRoom}
                    >
                        Close room
                    </Button>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Paper>
                        <Typography variant="h6" className={classes.smallPadding}>
                            Questions of {questionCollection.name}
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
            <Prompt when={true} message={navigateOutOfRoom} />
        </Container>
    );
};

Meeting.propTypes = {
    roomId: PropTypes.string,
};
