import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";

const CourseList = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <h3>Course List Page</h3>
            <p>Params: {location?.state?.title}</p>
            <button onClick={() => navigate(ROUTES.ADD_COURSE, {
                state: {
                    title: "from Course List"
                }
            })}>Go To Add Course</button>
            <button onClick={() => navigate(ROUTES.ADD_TYPE, {
                state: {
                    title: "from Course List"
                }
            })}>Go To Add Type </button>
            <button onClick={() => navigate(ROUTES.COURSE_LIST, {
                state: {
                    title: "from Course List"
                }
            })}>Go To Type List</button>
        </>
    );
};

export default CourseList;