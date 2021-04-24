import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rooms } from "../../api/rooms";
import { GuestForm } from "../../components/forms/GuestForm";
import { Paper, Typography } from "@material-ui/core";

export const Guest = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [guestName, setGuestName] = useState("");
    const [guestEmail, setGuestEmail] = useState("");

    useEffect(() => {});
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
        </div>
    );
};
