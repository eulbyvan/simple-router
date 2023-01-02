import { ROUTES } from "../constants";
import { Link } from "react-router-dom";

const menu = [
    { path: ROUTES.COURSE_LIST, text: "Course List" },
    { path: ROUTES.TYPE_LIST, text: "Type List" },
    { path: ROUTES.ADD_COURSE, text: "Add Course" },
    { path: `${ROUTES.EDIT_COURSE}/ini-adalah-id`, text: "Edit Course" },
    { path: ROUTES.ADD_TYPE, text: "Add Type" },
];

const Navbar = () => (
    <nav>
        {menu.map(item => (
            <Link
                to={item.path}
                style={{ marginRight: 10 }}
                state={{
                    title: "from Navbar"
                }}
            >
                {item.text}
            </Link>
        ))}
    </nav>
);

export default Navbar;