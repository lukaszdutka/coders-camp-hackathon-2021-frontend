import { Grid, Paper } from "@material-ui/core";
import { CollectionsList } from "../../components/lists/CollectionsList";
import { RoomsList } from "../../components/lists/RoomsList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    padding: {
        padding: "15px",
    },
}));

export const Profile = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.padding} spacing={5}>
            <Grid className={classes.padding} item xs={12} md={6}>
                <Paper className={classes.padding}>
                    <RoomsList />
                </Paper>
            </Grid>

            <Grid className={classes.padding} item xs={12} md={6}>
                <Paper className={classes.padding}>
                    <CollectionsList />
                </Paper>
            </Grid>
        </Grid>
    );
};
