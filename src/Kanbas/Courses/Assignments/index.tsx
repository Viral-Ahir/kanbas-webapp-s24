import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaEllipsisVertical, FaTrash } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";
import { deleteAssignment, setAssignment } from "./assignmentsReducer";
import "./index.css";
import { useNavigate } from "react-router-dom";
function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );
  const assignmentsList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState(null);

  const handleDeleteConfirmation = (assignmentId: any) => {
    setAssignmentToDelete(assignmentId);
    setShowConfirmation(true);
  };

  const deleteConfirmedAssignment = () => {
    dispatch(deleteAssignment(assignmentToDelete));
    setShowConfirmation(false);
  };

  return (
    <div className="flex-fill ms-5 me-5">
      <div className="va-asmt-header">
        <input
          className="va-asmt-search ms-4"
          placeholder="Search for Assignments"
        />
        <div className="va-asmt-header-right">
          <button className="va-button-grey me-2">
            <FaPlus className="me-2" />
            Group
          </button>

          <button
            onClick={() => {
              navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
            }}
            className="va-button-red me-2"
          >
            <FaPlus className="me-2" />
            Assignment
          </button>

          <button className="va-button-grey me-3">
            <FaEllipsisVertical />
          </button>
        </div>
      </div>
      <hr />
      {showConfirmation && (
        <div className="popup">
          <p>Are you sure you want to delete this assignment?</p>
          <button
            className="va-button-grey me-3"
            onClick={deleteConfirmedAssignment}
          >
            Yes
          </button>
          <button
            className="va-button-grey me-3"
            onClick={() => setShowConfirmation(false)}
          >
            No
          </button>
        </div>
      )}
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
            {assignmentsList
              .filter((module) => module.course === courseId)
              .map((assignment) => (
                <li className="list-group-item">
                  <FaEllipsisV className="me-2" />
                  <Link
                    onClick={() => dispatch(setAssignment(assignment))}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </Link>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2" />
                    <button
                      className="va-button-red-mini ms-2"
                      onClick={() => handleDeleteConfirmation(assignment._id)}
                    >
                      Delete
                      <FaTrash className="ms-2 " />
                    </button>
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
