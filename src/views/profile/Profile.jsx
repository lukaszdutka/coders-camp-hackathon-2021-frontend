import { Grid, Paper } from "@material-ui/core";
import { CollectionsList } from "../../components/lists/CollectionsList";
import { RoomsList } from "../../components/lists/RoomsList";

export const Profile = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Paper>
                    <RoomsList />
                </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
                <Paper>
                    <CollectionsList />
                </Paper>
            </Grid>
        </Grid>
    );
};
