import { ROUTES } from "../constants";

const TypeList = ({ onNavigate }) => (
    <>
        <h3>Type List</h3>
        <p>Params: contoh params</p>
        <button onClick={() => onNavigate(ROUTES.COURSE_LIST)}>Go To Course List</button>
    </>
);

export default TypeList;