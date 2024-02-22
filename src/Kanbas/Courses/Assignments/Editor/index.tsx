import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./index.css";
import { assignments } from "../../../Database";
import { FaCircleCheck, FaEllipsisVertical } from "react-icons/fa6";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="flex-fill ms-5 me-5">
      {/* <h2>Assignment Name</h2> */}
      <div className="va-asmt-edit-header">
        <div className="va-asmt-header-right">
          <button className="va-button-in-green">
            <FaCircleCheck className="me-2" />
            {/* <i className="fa-solid fa-circle-check me-2"></i> */}
            Published
          </button>
          <button className="va-button-grey me-3">
            <FaEllipsisVertical />
            {/* <i className="fa-solid fa-ellipsis-vertical"></i> */}
          </button>
        </div>
      </div>
      <hr />
      <form action="../screen.html">
        <div className="ms-5">
          <div className="row mt-2">
            <label className="ps-0" htmlFor="assignment_name">
              Assignment Name
            </label>
            <input
              type="text"
              name="assignment_name"
              id="assignment_name"
              className="form-control"
              value={assignment?.title}
            />
          </div>
          <div className="row mt-3">
            <textarea
              name="description"
              id="description"
              cols={20}
              rows={10}
              className="form-control"
            >
              Assignment Description - Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quas commodi officiis quisquam, omnis incidunt
              blanditiis alias magni quidem iusto eos sunt minus similique!
              Aspernatur sequi consequuntur voluptatem mollitia quis quibusdam
              autem libero dolore quo iure? Magni omnis eius, repellendus quo
              voluptatibus sunt repellat odio in quisquam dolore assumenda enim
              distinctio.
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
                value="100"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mt-3">
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
          </div>

          <div className="row mt-5">
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
          </div>

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
                    value="2021-01-01"
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
                    value="2021-01-01"
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
                    value="2021-01-01"
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
                <button className="va-button-grey" type="submit">
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
