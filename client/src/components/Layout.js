import React from "react";
import "../layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Layout({ children }) {
  // const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();
  const userMenu = [
    {
      name: "Home",
      path: "/home",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-list-line",
    },
    {
      name: "Apply Doctor",
      path: "/apply-doctor",
      icon: "ri-hospital-line",
    },
    {
      name: "Video Call",
      path: "/call",
      icon: "ri-video-chat-line"
    },
  ];

  const doctorMenu = [
    {
      name: "Home",
      path: "/home",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/doctor/appointments",
      icon: "ri-file-list-line",
    },
    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "ri-user-line",
    },
    {
      name: "Video Call",
      path: "/call",
      icon: "ri-video-chat-line"
    },
  ];

  const adminMenu = [
    {
      name: "Home",
      path: "/home",
      icon: "ri-home-line",
    },
    {
      name: "Users",
      path: "/admin/userslist",
      icon: "ri-user-line",
    },
    {
      name: "Doctors",
      path: "/admin/doctorslist",
      icon: "ri-user-star-line",
    },
    {
      name: "Video Call",
      path: "/call",
      icon: "ri-video-chat-line"
    },
  ];

  const menuToBeRendered = user?.isAdmin ? adminMenu : user?.isDoctor ? doctorMenu : userMenu;
  const role = user?.isAdmin ? "Admin" : user?.isDoctor ? "Doctor" : "User";
  return (

    <div style={{ backgroundColor: "white" }}>
      <nav className="navbar">
        {/* <!-- LOGO --> */}
        <div className="logo1">SH
          <h1 className="role">{role}</h1>
          <h1 className="role1">{user?.name}</h1>
        </div>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">&#9776;</label>
          <div className="menu">

            {menuToBeRendered.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  className={`menu-item ${isActive && "active-menu-item"
                    }`}
                >
                  <i className={menu.icon}></i>
                  {<Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
            <div
              className={`menu-item `}
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              <i className="ri-logout-circle-line"></i>
              {<Link to="/">Logout</Link>}

            </div>
          </div>
        </ul>
      </nav >
      <div className="main">
        <div className="layout">
          <div className="body">{children}</div>
        </div>
      </div>
    </div >
  );
}

export default Layout;
