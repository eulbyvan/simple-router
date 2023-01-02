import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../constants';

const EditCourse = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    return (
        <>
            <h3>Add Course Page</h3>
            <p>Params: {location?.state?.title}</p>
            <p>Path Variable: {params?.courseId}</p>
            <button onClick={() => navigate(ROUTES.COURSE_LIST, {
                state: {
                    title: "from Add Course"
                }
            })}>Go To Course List</button>
        </>
    );
};

export default EditCourse;