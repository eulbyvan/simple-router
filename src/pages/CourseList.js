import { ROUTES } from "../constants";

const CourseList = ({ onNavigate }) => (
    <>
        <h3>Course List Page</h3>
        <p>Params: contoh params</p>
        <button onClick={() => onNavigate(ROUTES.ADD_COURSE)}>Go To Add Course</button>
        <button onClick={() => onNavigate(ROUTES.ADD_TYPE)}>Go To Add Type </button>
        <button onClick={() => onNavigate(ROUTES.COURSE_LIST)}>Go To Type List</button>
    </>
);

export default CourseList;