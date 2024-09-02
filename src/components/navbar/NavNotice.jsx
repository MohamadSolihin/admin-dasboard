import React from "react";

function NavNotice() {
  return (
    <div>
      <ul className="nav-item dropdown">
        <a href="/" className="nav-link nav-icon" data-bs-toggle="dropdown">
          <i className="bi bi-bell"></i>
          <span className="badge text-bg-primary badge-number">4</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
          <li className="dropdwon-header ps-4">
            You have 4 notifications
            <a href="/">
              <span className="badge rounded-pill bg-primary p-2 ms-2">
                View All
              </span>
            </a>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="notification-item">
            <i className="bi bi-exclamation-circle text-warning"></i>
            <div>
              <h4>Lorem Imsum</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>30 min. ago</p>
            </div>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="notification-item">
            <i className="bi bi-x-circle text-success"></i>
            <div>
              <h4>Lorem yakul</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>1 hr. ago</p>
            </div>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="notification-item">
            <i className="bi bi-check-circle text-primary"></i>
            <div>
              <h4>Lorem Imsum koll</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>2 hrs. ago</p>
            </div>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="notification-item">
            <i className="bi bi--circle text-warning"></i>
            <div>
              <h4>Lorem Imsum</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>30 min. ago</p>
            </div>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="dropdown-footer">
            <a href="/">Show all notification</a>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default NavNotice;
