import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./index.css";
import { assignments } from "../../../Database";
import { FaCircleCheck, FaEllipsisVertical } from "react-icons/fa6";
import { KanbasState } from "../../../store";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  const dueDate = assignment?.dueDate.split("T")[0];
  const availableFromDate = assignment?.availableFromDate.split("T")[0];
  const availableUntilDate = assignment?.availableUntilDate.split("T")[0];

  const handleSave = () => {
    if (assignmentId !== "new") {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  console.log(assignment);

  return (
    <div className="flex-fill ms-5 me-5">
      <div className="va-asmt-edit-header">
        <div className="va-asmt-header-right">
          <button className="va-button-in-green">
            <FaCircleCheck className="me-2" />
            Published
          </button>
          <button className="va-button-grey me-3">
            <FaEllipsisVertical />
          </button>
        </div>
      </div>
      <hr />
      <form method="POST">
        <div className="ms-5">
          <div className="row mt-2">
            <label className="ps-0" htmlFor="assignment_name">
              Assignment Name
            </label>
            <input
              type="text"
              name="assignmentName"
              id="assignment_name"
              className="form-control"
              value={assignment?.title}
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, title: e.target.value })
                )
              }
            />
          </div>
          <div className="row mt-3">
            <textarea
              name="description"
              id="description"
              cols={20}
              rows={10}
              className="form-control"
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, description: e.target.value })
                )
              }
            >
              {assignment?.description}
            </textarea>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <label className="form-label float-end" htmlFor="points">
                Points
              </label>
            </div>
            <div className="col-6">
              <input
                type="number"
                id="points"
                min="0"
                max="100"
                // value="100"
                value={assignment?.points}
                className="form-control"
                onChange={(e) =>
                  dispatch(
                    setAssignment({ ...assignment, points: e.target.value })
                  )
                }
              />
            </div>
          </div>
          {/* <div className="row mt-3">
            <div className="col-3">
              <label
                className="form-label float-end"
                htmlFor="assignment-group"
              >
                Assignment Group
              </label>
            </div>
            <div className="col-6">
              <select
                id="assignment-group"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <label className="form-label float-end" htmlFor="grade-display">
                Display Grade as
              </label>
            </div>
            <div className="col-6">
              <select
                id="grade-display"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="Percentage">Percentage</option>
              </select>
            </div>
          </div> */}
          {/* <div className="row mt-5">
            <div className="col-3">
              <label className="form-label float-end" htmlFor="submission-type">
                Submission Type
              </label>
            </div>
            <div className="col-6 border border-1">
              <select
                id="submission-type"
                className="form-select mt-3 w-75"
                aria-label="Default select example"
              >
                <option value="submission-type">Online</option>
              </select>
              <br />
              <h5>Online Entry options</h5>
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" /> Text
                Entry
              </label>
              <br />
              <label className="mt-3 form-check-label">
                <input className="form-check-input" type="checkbox" />
                Website URL
              </label>
              <br />
              <label className="mt-3 form-check-label">
                <input className="form-check-input" type="checkbox" />
                Media Recordings
              </label>
              <br />
              <label className="mt-3 form-check-label">
                <input className="form-check-input" type="checkbox" />
                Student Annotation
              </label>
              <br />
              <label className="mt-3 mb-3 form-check-label">
                <input className="form-check-input" type="checkbox" /> File
                Uploads
              </label>
              <br />
            </div>
          </div> */}
          <div className="row mt-3">
            <div className="col-3">
              <label className="form-label float-end" htmlFor="Assign">
                Assign
              </label>
            </div>
            <div className="col-6">
              <div className="row border border-1">
                <div className="col-12">
                  <label className="form-label" htmlFor="Due">
                    <h5 className="mt-2">Assign to</h5>
                  </label>
                  <input
                    className="form-control"
                    id="Assign"
                    type="text"
                    value="Everyone"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="Due">
                    {" "}
                    Due
                  </label>
                  <input
                    className="form-control"
                    id="Due"
                    type="date"
                    value={dueDate}
                    onChange={(e) =>
                      dispatch(
                        setAssignment({
                          ...assignment,
                          dueDate: e.target.value,
                        })
                      )
                    }
                  />
                </div>

                <div className="col-6 pe-0 mt-2">
                  <label className="form-label" htmlFor="available-from">
                    Available from
                  </label>
                  <input
                    className="form-control"
                    id="available-from"
                    type="date"
                    value={availableFromDate}
                    onChange={(e) =>
                      dispatch(
                        setAssignment({
                          ...assignment,
                          availableFromDate: e.target.value,
                        })
                      )
                    }
                  />
                </div>

                <div className="col-6 ps-1 mt-2">
                  <label className="form-label" htmlFor="until">
                    {" "}
                    Until
                  </label>
                  <input
                    className="form-control"
                    id="until"
                    type="date"
                    value={availableUntilDate}
                    onChange={(e) =>
                      dispatch(
                        setAssignment({
                          ...assignment,
                          availableUntilDate: e.target.value,
                        })
                      )
                    }
                  />
                </div>

                <div className="col-12 pe-0 ps-0 mt-4">
                  <button className="va-button-grey w-100">
                    <i className="fa-solid fa-plus"></i>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="va-asmt-edit-header1 mb-3">
            <div>
              <input id="chkbox-update" type="checkbox" className="ms-4 me-2" />
              <label htmlFor="chkbox-update">
                Notify users that this content has changed
              </label>
            </div>
            <div className="va-asmt-header-right me-4">
              <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                <button
                  onClick={handleCancel}
                  className="va-button-grey me-2"
                  type="submit"
                >
                  Cancel
                </button>
              </Link>
              <button
                onClick={handleSave}
                className="va-button-red"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AssignmentEditor;
