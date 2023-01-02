import { ROUTES } from "../constants";

const AddCourse = ({ onNavigate }) => (
    <>
        <h3>Add Course Page</h3>
        <p>Params: contoh params</p>
        <button onClick={() => onNavigate(ROUTES.COURSE_LIST)}>Go To Course List</button>
    </>
);

export default AddCourse;