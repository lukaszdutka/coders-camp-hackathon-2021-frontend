import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexWrap: "nowrap",

        "& > *": {
            margin: "0px 7px",
        },
    },

    numberTextField: {
        maxWidth: "50px",
    },

    answer: {},
}));
