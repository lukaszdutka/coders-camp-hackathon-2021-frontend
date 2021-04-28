import React, { useEffect, useState } from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { Rooms } from "../api/rooms";

const columns = [
    { field: "text", headerName: "Question", width: 120 },
    { field: "correctAnswer", headerName: "Correct answer", width: 150 },
    { field: "guestAnswer", headerName: "Guest answer", width: 130 },
    {
        field: "correct",
        headerName: "Correct",
    },
];

export const GuestSummary = ({ roomId = "6084112b166c3c3e3430215e", email = "test@example.com" }) => {
    const [userSummary, setUserSummary] = useState(null);

    const fetchGuestSummary = async (resultPromise) => {
        const result = await resultPromise;

        if (!result.error) setUserSummary(result);
    };

    useEffect(() => {
        fetchGuestSummary(Rooms.getGuestSummary(roomId, email));
    }, []);

    const getSummary = () => {
        const correctAnswers = userSummary.questions.reduce((sum, val) => (sum += val.correct), 0);
        const incorrectAnswers = userSummary.questions.length - correctAnswers;

        return (
            <div>
                {"User email: " + userSummary.email} <br />
                {"Total questions: " + userSummary.questionsAll} <br />
                {"Questions answered: " + userSummary.questionsAnswered} <br />
                {"Correct answers: " + correctAnswers} <br />
                {"Incorrect answers: " + incorrectAnswers}
            </div>
        );
    };

    function mapRows() {
        const result = userSummary.questions.map(({ correct, correctAnswer, guestAnswer, text }, index) => {
            return { correct, correctAnswer, guestAnswer, text, id: index };
        });
        return result;
    }

    return (
        <Grid item xs={12}>
            {userSummary ? (
                <>
                    {/* <div> {getSummary()} </div> */}
                    <div style={{ height: 400 }}>
                        <DataGrid rows={mapRows()} columns={columns} pageSize={5} checkboxSelection />
                    </div>
                </>
            ) : (
                <CircularProgress />
            )}
        </Grid>
    );
};
