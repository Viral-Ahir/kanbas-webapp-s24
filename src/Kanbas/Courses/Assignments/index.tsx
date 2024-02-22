import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { FaPlus, FaEllipsisVertical } from "react-icons/fa6";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="flex-fill ms-5 me-5">
      <div className="va-asmt-header">
        <input
          className="va-asmt-search ms-4"
          placeholder="Search for Assignments"
        />
        <div className="va-asmt-header-right">
          <button className="va-button-grey">
            <FaPlus className="me-2" />
            {/* <i className="fa-solid fa-plus me-2"></i>  */}
            Group
          </button>
          <button className="va-button-red">
            <FaPlus className="me-2" />
            {/* <i className="fa-solid fa-plus me-2"></i> */}
            Assignment
          </button>
          <button className="va-button-grey me-3">
            <FaEllipsisVertical />
            {/* <i className="fa-solid fa-ellipsis-vertical"></i> */}
          </button>
        </div>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="va-asmt-list-head">
            <FaEllipsisV className="me-2" /> Assignments
            <span className="float-end">
              <span className="va-asmt-btn-round">40% of Total</span>
              <FaCheckCircle className=" ms-3 text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default Assignments;
