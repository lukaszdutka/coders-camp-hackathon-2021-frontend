import Popover from "@material-ui/core/Popover";

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
            The content of the Popover.
        </Popover>
    );
};

export default AddRoomModal;
