import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";

const TypeList = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <h3>Type List</h3>
            <p>Params: {location?.state?.title}</p>
            <button onClick={() => navigate(ROUTES.COURSE_LIST, {
                state: {
                    title: "from Type List"
                }
            })}>Go To Course List</button>
        </>
    );
};

export default TypeList;