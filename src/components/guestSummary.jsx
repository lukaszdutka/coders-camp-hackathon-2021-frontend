import React, { useEffect, useState } from "react";
import { Grid, List } from "@material-ui/core";
import { Rooms } from "../api/rooms";

export const GuestSummary = ({ roomId = "6084112b166c3c3e3430215e", email = "test@example.com" }) => {
    const [userSummary, setUserSummary] = useState(null);

    const fetchGuestSummary = async (resultPromise) => {
        const result = await resultPromise;
        console.log(result);
        if (!result.error) setUserSummary(result);
    };

    useEffect(() => {
        fetchGuestSummary(Rooms.getGuestSummary(roomId, email));
    }, []);

    const getSummary(){
        const correctAnswers = userSummary.questions.reduce((sum, val) =>  (sum += val.correct), 0);
        const incorrectAnswers = userSummary.questions.length - correctAnswers;

        
    }

    return (
        <Grid item xs={12}>
            <div>
                {userSummary
                    ? "Correct answers: " + 
                    : "Nothing"}
            </div>
        </Grid>
    );
};
