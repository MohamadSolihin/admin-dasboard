import React from "react";
import profileImg from "../../images/testing-profile.webp"
function NavAvatar() {
  return (
    <div>
      <li className="nav-item dropdown pe-3">
        <a
          href="/"
          className="nav-link nav-profile d-flex align-items-center pe-0"
          data-bs-toggle="dropdown">
          <img src={profileImg} alt="Profile" className="rounded-circle" />
          <span className="d-none d-md-block dropdown-toggle ps-2">
            F. David
          </span>
        </a>
      </li>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>David</h6>
          <span>Web Developer</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a
            href="user-profile.html"
            className="dropdown-item d-flex align-items-center">
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a
            href="user-profile.html"
            className="dropdown-item d-flex align-items-center">
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a
            href="user-profile.html"
            className="dropdown-item d-flex align-items-center">
            <i className="bi bi-question-circle"></i>
            <span>Need help?</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a
            href="user-profile.html"
            className="dropdown-item d-flex align-items-center">
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a
            href="/"
            className="dropdown-item d-flex align-items-center">
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavAvatar;
