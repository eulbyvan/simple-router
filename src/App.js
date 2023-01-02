import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ROUTES } from './constants';
import AddCourse from './pages/AddCourse';
import AddType from './pages/AddType';
import TypeList from './pages/TypeList';
import CourseList from './pages/CourseList';
import Navbar from './components/Navbar';

import { Routes, Route } from "react-router-dom"
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {menu.map((item) => (
          <Route path={item.path} element={item.element} index={item.index} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
