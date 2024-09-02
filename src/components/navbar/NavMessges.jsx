import React from "react";

function NavMessges() {
  return (
    <div>
      <li className="nav-item dropdown">
        <a href="/" className="nav-link nav-icon" data-bs-toggle="dropdown">
          <i className="bi bi-chat-left-text"></i>
          <span className="badge text-bg-primary badge-number">3</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
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

          <li className="message-item">
            <a href="/">
              <img
                src="https://via.placeholder.com/30x30"
                className="rounded-circle me-2"
                alt="user"
              />
              <div>
                <h4>Lorem Imsum</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>10 min. ago</p>
              </div>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="message-item">
            <a href="/">
              <img
                src="https://via.placeholder.com/30x30"
                className="rounded-circle"
                alt="user"
              />
              <div>
                <h4>Lorem Imsum</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>10 min. ago</p>
              </div>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="message-item">
            <a href="/">
              <img
                src="https://via.placeholder.com/30x30"
                className="rounded-circle"
                alt="user"
              />
              <div>
                <h4>Lorem Imsum</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>10 min. ago</p>
              </div>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="message-item">
            <a href="/">
              <img
                src="https://via.placeholder.com/30x30"
                className="rounded-circle"
                alt="user"
              />
              <div>
                <h4>Lorem Imsum</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>10 min. ago</p>
              </div>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li className="dropdown-footer">
            <a href="/">Show all notification</a>
          </li>
          
        </ul>
      </li>
    </div>
  );
}

export default NavMessges;
