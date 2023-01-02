import { ROUTES } from "../constants";
import { Link } from "react-router-dom";

const menu = [
    { path: ROUTES.COURSE_LIST, text: "Course List" },
    { path: ROUTES.TYPE_LIST, text: "Type List" },
    { path: ROUTES.ADD_COURSE, text: "Add Course" },
    { path: ROUTES.ADD_TYPE, text: "Add Type" },
];

const Navbar = ({ onNavigate }) => (
    <nav>
        {menu.map(item => (
            <Link
                to={item.path}
                style={{ marginRight: 10 }}
            >
                {item.text}
            </Link>
        ))}
    </nav>
);

export default Navbar;