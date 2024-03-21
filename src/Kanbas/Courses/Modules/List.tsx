import React, { useState } from "react";
// import "./index.css";
// import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(
    moduleList.filter((module) => module.course === courseId)[0]
  );

  // const [moduleList, setModuleList] = useState<any[]>(modules);
  // const [module, setModule] = useState({
  //   _id: "1234",
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });

  // // const modulesList = modules.filter((module) => module.course === courseId);
  // const [selectedModule, setSelectedModule] = useState(
  //   moduleList.filter((module) => module.course === courseId)[0]
  // );
  // const addModule = (module: any) => {
  //   const newModule = { ...module, _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };
  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId
  //   );
  //   setModuleList(newModuleList);
  // };
  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };

  return (
    <>
      <div className="va-home-top-button-flex">
        <button type="button" className="va-button-grey">
          Collapse All
        </button>
        <button type="button" className="va-button-grey">
          View Progress
        </button>
        <select id="publish-all">
          <option value="PUBLISH_ALL">Publish All</option>
        </select>
        <button type="button" className="va-button-red">
          <i className="fa-solid fa-plus"></i>Module
        </button>
      </div>
      <hr />
      <div className="full-screen-div mb-4">
        <form className="mt-4 row">
          <div className="row">
            <div className="mb-1 col-md-3">
              <input
                type="text"
                id="name"
                className="form-control"
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
              />
            </div>
            <div className="mb-1 col-md-6">
              <textarea
                rows={1}
                id="number"
                className="form-control"
                value={module.description}
                onChange={(e) =>
                  dispatch(
                    setModule({ ...module, description: e.target.value })
                  )
                }
              />
            </div>
            <div className="mb-1 col-md-1 ">
              <button
                onClick={() =>
                  dispatch(addModule({ ...module, course: courseId }))
                }
                type="button"
                className="va-button-green"
              >
                Add
              </button>
            </div>
            <div className="mb-1 col-md-1 ">
              <button
                onClick={() => dispatch(updateModule(module))}
                type="button"
                className="va-button-blue"
              >
                Update
              </button>
            </div>
          </div>
        </form>
        {/* <div className="d-flex justify-content-end mb-1">
          <button type="button" className="btn btn-success m-2">
            Add
          </button>
        </div> */}
      </div>
      <ul className="list-group wd-modules">
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module) => (
            <li
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div>
                <FaEllipsisV className="me-2" />
                <strong>{module.name}</strong>
                {/* - 
                {module.description} */}
                <div className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                  <button
                    className="va-button-red-mini ms-2 me-2"
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    Delete
                  </button>
                  <button
                    className="va-button-yellow-mini"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>
                </div>
              </div>

              {selectedModule &&
                module._id &&
                selectedModule._id === module._id && (
                  <ul className="list-group">
                    {module.lessons?.map((lesson: any) => (
                      <li className="list-group-item">
                        <FaEllipsisV className="me-2" />
                        {lesson.name}
                        <span className="float-end">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV className="ms-2" />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
