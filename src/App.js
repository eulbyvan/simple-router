import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ROUTES } from './constants';
import AddCourse from './pages/AddCourse';
import AddType from './pages/AddType';
import TypeList from './pages/TypeList';
import CourseList from './pages/CourseList';
import Navbar from './components/Navbar';

import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import EditCourse from './pages/EditCourse';

const menu = [
  { path: "/", index: true, element: <h1>Dashboard Page</h1> },
  { path: ROUTES.COURSE_LIST, element: <CourseList /> },
  { path: ROUTES.TYPE_LIST, element: <TypeList /> },
  { path: ROUTES.ADD_COURSE, element: <AddCourse /> },
  { path: ROUTES.ADD_TYPE, element: <AddType /> },
  { path: `${ROUTES.EDIT_COURSE}/:courseId?`, element: <EditCourse /> },
  { path: "*", element: <h1>Page not found!</h1> }
];

const CourseWrapper = () => (
  <>
    <h1>Course Page</h1>
    <Outlet />
  </>
);

const TypeWrapper = () => (
  <>
    <h1>Type Page</h1>
    <Outlet />
  </>
)

const ProtectedRoutes = ({ isLoggedIn }) => {
  if (!isLoggedIn) return <Navigate to={ROUTES.LOGIN} replace={true} />;

  return (
    <>
      <Navbar />
      <hr />
      <Outlet />
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.LOGIN} element={<h1>Login Page</h1>} index={true} />
        <Route path={ROUTES.DASHBOARD} element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
          <Route path={ROUTES.COURSE_LIST} element={<CourseWrapper />}>
            <Route element={<CourseList />} index={true} />
            <Route path={ROUTES.ADD_COURSE} element={<AddCourse />} />
            <Route path={`${ROUTES.EDIT_COURSE}/:courseId?`} element={<EditCourse />} />
          </Route>
          <Route path={ROUTES.TYPE_LIST} element={<TypeWrapper />}>
            <Route index={true} element={<TypeList />} />
            <Route path={ROUTES.ADD_TYPE} element={<AddType />} />
          </Route>
        </Route>
        <Route path={"*"} element={<h3>Page not found</h3>} />
      </Routes>
    </div>
  );
}

export default App;
