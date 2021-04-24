import "../../App.css";
import {
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
import PropTypes from "prop-types";
import { QuestionListItem } from "../inputs";
import { AppContext } from "../../Context";
import { Rooms } from "../../api/rooms";
import { useParams } from "react-router-dom";

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

export const MeetingView = () => {
    // export const MeetingView = () => {
    //     const roomId = "6083c31a612ed37248485983";
    const { id } = useParams();
    const roomId = id;

    const classes = useStyles();
    const { token } = useContext(AppContext);

    const [room, setRoom] = useState({});
    const [questionCollection, setQuestionCollection] = useState({});
    const [guests, setGuests] = useState([]);

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
        return () => {
            clearInterval(interval);
        };
    }, [roomId, token]);

    useEffect(() => {
        const fetchRoom = async () => {
            let roomResponse = await Rooms.getRoomById(roomId, token);

            setRoom(roomResponse);
            setQuestionCollection(roomResponse.questionsCollectionId); //Note: its named "id" but it's whole object XD
            setGuests(roomResponse.guests);

            return roomResponse;
        };
        fetchRoom();
    }, [roomId, token]);

    const listQuestions = () => {
        if (!questionCollection.questions || questionCollection.questions.length === 0) {
            return <ListItem> There are no questions </ListItem>;
        }
        return questionCollection.questions.map((question) => {
            return <QuestionListItem key={question._id} question={question} roomId={roomId} />;
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
    return (
        <Container maxWidth="lg" className={classes.smallPadding}>
            <Typography variant="h4" className={classes.smallPadding}>
                Room {room.name}
            </Typography>
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
        </Container>
    );
};

MeetingView.propTypes = {
    roomId: PropTypes.string,
    // formError: PropTypes.string,
    // loading: PropTypes.bool,
};
