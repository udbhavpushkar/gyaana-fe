import React from "react";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class={styles.navLinksCon} aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class={styles.navLinksCon} href="#">
                Gallery
              </a>
            </li>
            <li class="nav-item">
              <a class={styles.navLinksCon} href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class={styles.navLinksCon} href="#">
                Admission
              </a>
            </li>
            <li class="nav-item">
              <a class={styles.navLinksCon} href="#">
                News
              </a>
            </li>
            <li class="nav-item">
              <a class={styles.navLinksCon} href="#">
                Downloads
              </a>
            </li>
            <li class="nav-item">
              <a class={styles.navLinksCon} href="#">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class={styles.navLinksCon} href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
