import { useHistory, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context";
import { Rooms } from "../../api/rooms";
import {
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    padding: {
        padding: "15px",
    },
    margin: {
        margin: "15px 15px 15px 0",
    },
}));

export const MentorSummaryView = () => {
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();
    const { token } = useContext(AppContext);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const getSummary = async () => {
            let response = await Rooms.getMentorSummary(id, token);

            if (response.questions) {
                setQuestions(response.questions);
            }
        };
        getSummary();
    }, [id, token]);

    const questionsList = () =>
        questions.map((question, index) => {
            return (
                <TableRow key={index}>
                    <TableCell component="th" scope="row">
                        {question.text}
                    </TableCell>
                    <TableCell align="right">{question.correctAnswer}</TableCell>
                    <TableCell align="right">
                        {question.correctAnswers} / {question.allAnswers}
                    </TableCell>
                </TableRow>
            );
        });

    const goBack = () => {
        history.push("/");
    };
    return (
        <Grid container className={classes.padding} spacing={5}>
            <Grid item xs={3} />
            <Grid className={classes.padding} item xs={6}>
                <Paper className={classes.padding}>
                    <Typography variant="h4">Summary</Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Question</TableCell>
                                    <TableCell align="right">Correct Answer</TableCell>
                                    <TableCell align="right"> correct / all</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>{questionsList()}</TableBody>
                        </Table>
                    </TableContainer>
                    <Button className={classes.margin} color={"primary"} variant={"outlined"} onClick={goBack}>
                        Back
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={3} />
        </Grid>
    );
};
