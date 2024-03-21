import KanbasNavigation from "./Navigation";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { courses } from "../Kanbas/Database";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { FaBars, FaGlasses, FaChevronDown } from "react-icons/fa6";
import store from "./store";
import { Provider } from "react-redux";
function Kanbas() {
  // const { courseId } = useParams();
  // const course = courses.find((course) => course._id === courseId);
  // const { pathname } = useLocation();
  // const paths = pathname.split(/Courses\/[a-zA-Z0-9]+\//)[1];
  // let currentPath = paths.split("/")[0];
  // currentPath = decodeURIComponent(currentPath);
  const [coursesList, setCoursesList] = useState(courses);
  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
  });
  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCoursesList([...coursesList, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCoursesList(coursesList.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCoursesList(
      coursesList.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <div className="d-none d-md-block me-3">
          <KanbasNavigation />
        </div>
        <div className="flex-fill me-4">
          <div className="row d-block d-md-none">
            <div className="va-flex-header-mini">
              <div>
                {/* <a
                className="va-colour-white collapsed"
                data-bs-toggle="collapse"
                href="/collapseKanbasNav"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              > */}
                <div className="ms-3 va-colour-white">
                  <FaBars />
                </div>
                {/* </a> */}
              </div>
              <div className="va-section-title-mini">
                <div className="va-section-title-mini-main">Course</div>
                <div className="va-section-title-mini-sub">Sub Section</div>
              </div>
              <div className="va-button-black">
                {/* <a href="/" className="va-colour-white"> */}
                <FaGlasses className="va-colour-white" />
                {/* </a> */}
                {/* <a
                className="va-colour-white collapsed"
                data-bs-toggle="collapse"
                href="/collapseCourseNav"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              > */}
                <FaChevronDown className="va-colour-white" />
                {/* </a> */}
              </div>
            </div>
            <hr />
          </div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  coursesList={coursesList}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses coursesList={coursesList} />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
