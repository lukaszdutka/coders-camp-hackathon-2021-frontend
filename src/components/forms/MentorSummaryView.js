import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Context";
import { Rooms } from "../../api/rooms";

export const MentorSummaryView = () => {
    const { id } = useParams();
    const { token } = useContext(AppContext);

    useEffect(() => {
        const getSummary = async () => {
            let response = await Rooms.getMentorSummary(id, token);

            console.log(response);
            console.log(response.guests);
            console.log(response.questions);
        };
        getSummary()
    }, [id, token]);
    return <div>hello world {id}</div>;
};
