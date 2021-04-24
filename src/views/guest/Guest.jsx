import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rooms } from "../../api/rooms";
import { GuestForm } from "../../components/forms/GuestForm";
import { Paper, Typography } from "@material-ui/core";
import { Question } from "../../components/forms/Question";

export const Guest = () => {
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
        <div>
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
    );
};
