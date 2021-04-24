import { useContext, useEffect, useState } from "react";
import {
    Button,
    CircularProgress,
    Divider,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Typography,
    useMediaQuery,
} from "@material-ui/core";
import { Rooms } from "../../api/rooms";
import AddRoomModal from "../modals/AddRoomModal";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../Context";
import InputIcon from "@material-ui/icons/Input";
import AddIcon from "@material-ui/icons/Add";
import LinkIcon from "@material-ui/icons/Link";
import copy from "copy-to-clipboard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    buttonModal: {
        display: "grid",
        justifyItems: "center",
        paddingTop: "20px",
    },
}));

export const RoomsList = () => {
    const { token } = useContext(AppContext);
    const [rooms, setRooms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const matches = useMediaQuery("(min-width:600px)");
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        const getRooms = async () => {
            setIsLoading(true);
            const rooms = await Rooms.getRooms(token);
            if (!rooms.error) setRooms(rooms.reverse());
            setIsLoading(false);
        };
        getRooms(Rooms.getRooms(token));
    }, [token]);

    const handleCopyLink = (roomId) => {
        // delete localhost for deployment
        copy(`https://lukaszdutka.github.io/coders-camp-hackathon-2021-frontend#/${roomId}`);
    };

    const handleGoToRoom = (roomId) => {
        history.push(`/room/${roomId}`);
    };

    const handleOpenPopup = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClosePopup = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const roomList = rooms.map((room) => {
        const date = new Date(room.createdAt).toLocaleString();
        return (
            <>
                <ListItem key={room._id}>
                    <ListItemText primary={room.name} secondary={date} />
                    <ListItemSecondaryAction>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<LinkIcon />}
                            onClick={() => handleCopyLink(room._id)}
                        >
                            {matches && "Copy link"}
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<InputIcon />}
                            onClick={() => handleGoToRoom(room._id)}
                        >
                            {matches && "Enter"}
                        </Button>
                    </ListItemSecondaryAction>
                </ListItem>
            </>
        );
    });

    return (
        <List>
            <Typography variant="h6">Rooms</Typography>
            <Divider />
            {isLoading ? <CircularProgress /> : roomList}
            <div className={classes.buttonModal}>
                <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={handleOpenPopup}>
                    Add a new room
                </Button>
            </div>
            <AddRoomModal anchorEl={anchorEl} handleClosePopup={handleClosePopup} open={open} />
        </List>
    );
};
