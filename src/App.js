import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ROUTES } from './constants';
import AddCourse from './pages/AddCourse';
import AddType from './pages/AddType';
import TypeList from './pages/TypeList';
import CourseList from './pages/CourseList';
import Navbar from './components/Navbar';

function App() {

  const { ADD_COURSE, ADD_TYPE, TYPE_LIST, COURSE_LIST } = ROUTES;

  const [nav, setNav] = useState(COURSE_LIST);

  let Component;

  switch (nav) {
    case ADD_COURSE:
      Component = AddCourse;
      break;
    case ADD_TYPE:
      Component = AddType;
      break;
    case TYPE_LIST:
      Component = TypeList;
      break;
    case COURSE_LIST:
      Component = CourseList;
      break;
    default:
      Component = CourseList;
      break;
  }

  return (
    <div className="App">
      <Navbar onNavigate={setNav} />
      <Component onNavigate={setNav} />
    </div>
  );
}

export default App;
