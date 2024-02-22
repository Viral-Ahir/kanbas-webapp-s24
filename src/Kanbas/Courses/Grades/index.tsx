import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport, FaGear, FaFilter } from "react-icons/fa6";
import "./index.css";
function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  console.log(es);
  return (
    <div className="flex-fill ms-5 me-5">
      <div className="va-asmt-edit-header mt-2">
        <div className="va-asmt-header-right">
          <button className="va-button-grey me-1">
            <FaFileImport className="me-2" />
            Import
          </button>
          <button className="va-button-grey me-2">
            <FaFileExport className="me-2" />
            Export
          </button>
          <button className="va-button-grey me-3">
            <FaGear />
          </button>
        </div>
      </div>

      <div className="col-12 mt-2">
        <div className="row">
          <div className="col-6">
            <span className="va-grade-input-header">Student Names</span>
          </div>

          <div className="col-6">
            <span className="va-grade-input-header">Assignment Names</span>
          </div>

          <div className="col-6">
            <input
              className="form-control"
              type="text"
              name="StudentName"
              placeholder="Search Students"
              title="Search using name of the students"
            />
          </div>

          <div className="col-6">
            <input
              className="form-control"
              type="text"
              name="AssignmentName"
              placeholder="Search Assignments"
              title="Search using name of the assignments"
            />
          </div>
        </div>
      </div>

      <div className="va-asmt-edit-header1 mt-3">
        <div className="va-asmt-header-right">
          <button className="va-button-grey me-1 mb-3">
            <FaFilter className="me-2" />
            Apply Filter
          </button>
        </div>
      </div>
      {/* <div className="grid-container">
        <div className="grid-item header">Student Name </div>
        {as.map((assignment) => (
          <div className="grid-item header">{assignment.title}</div>
        ))}
      </div> */}
      <div className="table-responsive ">
        <table className="table table-striped table-bordered align-middle text-center fixed-width-table ">
          <thead>
            <th className="header">Student Name</th>
            {as.map((assignment) => (
              <th className="header">{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td className="va-table-head-red">
                    {user?.firstName} {user?.lastName}
                  </td>
                  {as.map((assignment) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
