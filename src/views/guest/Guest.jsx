import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rooms } from "../../api/rooms";
import { GuestForm } from "../../components/forms/GuestForm";
import { Typography, Paper } from "@material-ui/core";
import { Question } from "../../components/forms/Question";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    guestBeginningFormContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    guestBeginningForm: {
        padding: "3rem",
        flexBasis: "40%",
        // minidth: "1000px",
    },
    // loginImg: {
    //     border: "6px solid #91C43B",
    //     borderRadius: "10%",
    //     marginTop: "25px",
    // },
    // action: {
    //     marginTop: "30px",
    // },
    // paddingBot: {
    //     marginTop: "80px",
    //     paddingBottom: "30px",
    // },
    // paddingBotBig: {
    //     marginTop: "40px",
    //     marginBottom: "60px",
    // },
}));

export const Guest = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [guestName, setGuestName] = useState("");
    const [guestEmail, setGuestEmail] = useState("");
    const [activeQuestion, setActiveQuestion] = useState({});

    useEffect(() => {
        const getActiveQuestion = async () => {
            const question = await Rooms.getActiveQuestion(id, guestEmail);
            if (!question.error) setActiveQuestion(question);
            if (question.error || !question) setActiveQuestion({});
        };
        if (guestEmail) {
            getActiveQuestion();
            const interval = setInterval(() => getActiveQuestion(), 1000);
            return () => clearInterval(interval);
        }
    }, [guestEmail, id]);
    return (
        <div className={classes.guestBeginningFormContainer}>
            <div className={classes.guestBeginningForm}>
                {!guestName && !guestEmail ? (
                    <GuestForm roomId={id} setGuestEmail={setGuestEmail} setGuestName={setGuestName} />
                ) : (
                    <Paper>
                        <Typography variant="h5">Welcome {guestName}</Typography>
                        <Typography variant="body1">Please wait for questions</Typography>
                    </Paper>
                )}
                {activeQuestion.activeQuestion && guestName && guestEmail && (
                    <Question
                        question={activeQuestion}
                        setActiveQuestion={setActiveQuestion}
                        roomId={id}
                        email={guestEmail}
                    />
                )}
            </div>
        </div>
    );
};
