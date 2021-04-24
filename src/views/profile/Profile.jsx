import { Grid, Paper } from "@material-ui/core";
import { CollectionsList } from "../../components/lists/CollectionsList";

export const Profile = () => {
    return (
        <Grid container xs={12}>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}>
                <Paper>
                    <CollectionsList />
                </Paper>
            </Grid>
        </Grid>
    );
};
