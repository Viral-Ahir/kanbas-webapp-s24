import { courses } from "../../Kanbas/Database";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
// import "../../libs/bootstrap/bootstrap.min.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";
import { FaGlasses } from "react-icons/fa6";
import "../styles.css";
import "./index.css";
function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const paths = pathname.split(/Courses\/[a-zA-Z0-9]+\//)[1];
  let currentPath = paths.split("/")[0];
  const assignmentId = paths?.split("/")?.[1];
  currentPath = decodeURIComponent(currentPath);
  return (
    <div className="flex-fill ms-3 me-4">
      <div className="row d-none d-md-block">
        <div className="va-flex-header">
          <div>
            <HiMiniBars3 />
            {/* <i className="fa-solid fa-bars"></i> */}
          </div>
          <div className="va-section-title">Course {course?.name}</div>
          <div>
            <FaChevronRight />
            {/* <i className="fa-solid fa-chevron-right"></i> */}
          </div>
          <div className="section-curr">{currentPath}</div>
          {assignmentId && (
            <>
              <div>
                <FaChevronRight />
              </div>
              <div className="section-curr">{assignmentId}</div>
            </>
          )}
          <div className="va-flex-header-last va-button-grey">
            <FaGlasses />
            <button type="button" className="va-student-view-btn">
              Student View
            </button>
          </div>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="d-flex">
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>
          <div className="d-flex flex-grow-1">
            {" "}
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="row d-none d-md-block">
    //     <div className="va-flex-header">
    //       <div>
    //         <HiMiniBars3 />
    //         {/* <i className="fa-solid fa-bars"></i> */}
    //       </div>
    //       <div className="va-section-title">Course {course?.name}</div>
    //       <div>
    //         <FaChevronRight />
    //         {/* <i className="fa-solid fa-chevron-right"></i> */}
    //       </div>
    //       <div className="section-curr">{currentPath}</div>
    //       <div className="va-flex-header-last va-button-grey">
    //         <FaGlasses />
    //         <button type="button" className="va-student-view-btn">
    //           Student View
    //         </button>
    //       </div>
    //     </div>
    //     <hr />
    //   </div>
    //   <CourseNavigation />
    //   <div>
    //     <div
    //       className="overflow-y-scroll position-fixed bottom-0 end-0"
    //       style={{ left: "300px", top: "100px" }}
    //     >
    //       <Routes>
    //         <Route path="/" element={<Navigate to="Home" />} />
    //         <Route path="Home" element={<Home />} />
    //         <Route path="Modules" element={<Modules />} />
    //         <Route path="Piazza" element={<h1>Piazza</h1>} />
    //         <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
    //         <Route path="Assignments" element={<h1>Assignments</h1>} />
    //         <Route
    //           path="Assignments/:assignmentId"
    //           element={<h1>Assignment Editor</h1>}
    //         />
    //         <Route path="Grades" element={<h1>Grades</h1>} />
    //       </Routes>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Courses;
