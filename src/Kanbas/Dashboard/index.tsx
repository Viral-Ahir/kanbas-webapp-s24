import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "../../libs/bootstrap/bootstrap.min.css";

function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="d-none d-sm-block">Dashboard</h1>
      <h1 className="d-block d-sm-none">
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </h1>
      <hr />
      <h2>Published Courses (12)</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {courses.map((course) => (
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
