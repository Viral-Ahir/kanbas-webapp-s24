import { Link, useLocation } from "react-router-dom";
import "./index.css";
import "../styles.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaRegClock,
  FaTv,
} from "react-icons/fa";
import {
  FaInbox,
  FaRegCircleQuestion,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle /> },
    { label: "Dashboard", icon: <FaTachometerAlt /> },
    { label: "Courses", icon: <FaBook /> },
    { label: "Calendar", icon: <FaRegCalendarAlt /> },
    { label: "Inbox", icon: <FaInbox /> },
    { label: "History", icon: <FaRegClock /> },
    { label: "Studio", icon: <FaTv /> },
    { label: "Commons", icon: <FaArrowRightFromBracket /> },
    { label: "Help", icon: <FaRegCircleQuestion /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li>
        <Link to="http://northeastern.edu">
          <img alt="NEU Logo" src="/images/neu_logo.png" width="60px" />
        </Link>
      </li>
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "wd-active" : ""}
        >
          <Link to={`/Kanbas/${link.label}`}>
            {" "}
            {link.label === "Account" ? (
              <span className="va-navigation-profile-white">{link.icon}</span>
            ) : (
              link.icon
            )}{" "}
            <div>{link.label} </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
