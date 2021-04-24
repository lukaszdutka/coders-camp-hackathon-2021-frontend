import Popover from "@material-ui/core/Popover";

export const Popup = ({ open, handleClosePopup, anchorEl, children }) => {
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
            {children}
        </Popover>
    );
};
