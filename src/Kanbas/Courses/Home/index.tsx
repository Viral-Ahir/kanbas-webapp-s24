import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <>
      {/* <h2>Home</h2> */}
      <div className="flex-fill ms-5 me-5">
        <ModuleList />
      </div>
      <div className="flex-grow-0 d-none d-lg-block" style={{ width: "250px" }}>
        <h2>Status</h2>
        <h4>Course Status</h4>
        <button type="button" className="va-button-grey">
          Unpublish
        </button>
        <button type="button" className="va-button-green">
          Published
        </button>
        <ul className="va-home-status-ul">
          <li>Importing Existing Content</li>
          <li>Import From Commons</li>
          <li>Choose Home Page</li>
          <li>View Course Stream</li>
          <li>New Announcement</li>
          <li>New Analysis</li>
          <li>View Course Notification</li>
        </ul>

        <div className="va-comming-cont">
          <div className="va-comming-up-title">To Do</div>
        </div>
        <div className="va-comming-list-cont">
          <div className="va-comming-list-item">
            <div className="va-todo-symbol-1 me-3">1</div>
            <div className="va-comming-list-detail">
              <div className="va-comming-list-item-head">
                Grade A1 - ENV + HTML
              </div>
              <div className="va-comming-list-item-cont1">
                CS4550.12631.202410
              </div>
              <div className="va-comming-list-item-cont2">Sep 7 at 11:45am</div>
            </div>
            <i className="fa-solid fa-xmark va-todo-cross-mark"></i>
          </div>
        </div>

        <div className="va-comming-cont">
          <div className="va-comming-up-title">Comming Up</div>
          <div className="va-comming-title-cont">
            <i className="fa-regular fa-calendar me-1"></i>
            <a href="/" className="va-view-cal me-2">
              View Calender
            </a>
          </div>
        </div>

        <div className="va-comming-list-cont">
          <div className="va-comming-list-item">
            <i className="fa-regular fa-calendar me-3"></i>
            <div className="va-comming-list-detail">
              <div className="va-comming-list-item-head">LECTURE</div>
              <div className="va-comming-list-item-cont1">
                CS4550.12631.202410
              </div>
              <div className="va-comming-list-item-cont2">Sep 7 at 11:45am</div>
            </div>
          </div>
          <div className="va-comming-list-item">
            <i className="fa-regular fa-calendar me-3"></i>
            <div className="va-comming-list-detail">
              <div className="va-comming-list-item-head">CS4550 - LECTURE</div>
              <div className="va-comming-list-item-cont1">
                CS4550.12631.202410
              </div>
              <div className="va-comming-list-item-cont2">Sep 7 at 11:45am</div>
            </div>
          </div>
          <div className="va-comming-list-item">
            <i className="fa-regular fa-calendar me-3"></i>
            <div className="va-comming-list-detail">
              <div className="va-comming-list-item-head">CS5610 - LECTURE</div>
              <div className="va-comming-list-item-cont1">
                CS4550.12631.202410
              </div>
              <div className="va-comming-list-item-cont2">Sep 7 at 11:45am</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
