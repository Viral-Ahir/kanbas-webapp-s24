import React from "react";
import { Link } from "react-router-dom";
// import { courses } from "../Database";
import "../../libs/bootstrap/bootstrap.min.css";

function Dashboard({
  coursesList,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  coursesList: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  // const [coursesList, setCoursesList] = useState(courses);
  // const [course, setCourse] = useState({
  //   _id: "0",
  //   name: "New Course",
  //   number: "New Number",
  //   startDate: "2023-09-10",
  //   endDate: "2023-12-15",
  //   image: "/images/reactjs.jpg",
  // });
  // const addNewCourse = () => {
  //   const newCourse = { ...course, _id: new Date().getTime().toString() };
  //   setCoursesList([...coursesList, { ...course, ...newCourse }]);
  // };
  // const deleteCourse = (courseId: string) => {
  //   setCoursesList(courses.filter((course) => course._id !== courseId));
  // };
  // const updateCourse = () => {
  //   setCoursesList(
  //     coursesList.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  return (
    <div className="p-4">
      <h1 className="d-none d-sm-block">Dashboard</h1>
      <h1 className="d-block d-sm-none">
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </h1>
      <hr />
      <h2>Published Courses ({coursesList.length})</h2>
      <hr />
      <div className="full-screen-div container">
        <form className="mt-4 row g-3">
          <div className="row">
            <div className="mb-1 col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={course.name}
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
              />
            </div>
            <div className="mb-1 col-md-6">
              <label htmlFor="number" className="form-label">
                Number
              </label>
              <input
                type="text"
                id="number"
                className="form-control"
                value={course.number}
                onChange={(e) =>
                  setCourse({ ...course, number: e.target.value })
                }
              />
            </div>
            <div className="mb-1 col-md-6">
              <label htmlFor="startDate" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                className="form-control"
                value={course.startDate}
                onChange={(e) =>
                  setCourse({ ...course, startDate: e.target.value })
                }
              />
            </div>
            <div className="mb-1 col-md-6">
              <label htmlFor="endDate" className="form-label">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                className="form-control"
                value={course.endDate}
                onChange={(e) =>
                  setCourse({ ...course, endDate: e.target.value })
                }
              />
            </div>
          </div>
        </form>
        <div className="d-flex justify-content-end mb-1">
          <button
            onClick={addNewCourse}
            type="button"
            className="btn btn-success m-2"
          >
            Add
          </button>
          <button
            onClick={updateCourse}
            type="button"
            className="btn btn-primary m-2"
          >
            Update
          </button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {coursesList.map((course) => (
          <div
            key={course._id}
            className="col va-card-margin"
            style={{ width: "280px" }}
          >
            <div className="card">
              <img
                src={`/images/${course.image}`}
                className="card-img-top"
                alt=""
                style={{ height: 150 }}
              />
              <div className="card-body">
                <Link
                  className="card-title"
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  {course.name}{" "}
                </Link>
                <p className="card-text">{course.name}</p>
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="btn btn-primary"
                >
                  Go{" "}
                </Link>
                <button
                  className="btn ms-2 btn-warning"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button>
                <button
                  className="ms-2 btn btn-danger"
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
