import Popover from "@material-ui/core/Popover";
import { CreateRoom } from "../forms/CreateRoom";

const AddRoomModal = ({ open, handleClosePopup, anchorEl }) => {
    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClosePopup}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
            transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
        >
            <CreateRoom handleClosePopup={handleClosePopup} />
        </Popover>
    );
};

export default AddRoomModal;
