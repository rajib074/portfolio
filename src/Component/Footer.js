import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="footer p-10 bg-neutral text-neutral-content">
        <div className="m-auto">
          <span class="footer-title">Skils</span>
          <a class="link link-hover">HTML</a>
          <a class="link link-hover">CSS</a>
          <a class="link link-hover">JavaScript</a>
          <a class="link link-hover">React</a>
        </div>
        <div className="m-auto">
          <span class="footer-title">Menu</span>
          <Link to="/">Home</Link>
          <a href="https://drive.google.com/file/d/1QJHEcEibx5WgWeNbFIK0DJlqtyCIPbDG/view?usp=sharing">
            Resume
          </a>
          <Link to="/project">Projects</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="m-auto">
          <span class="footer-title">Social</span>
          <a href="https://github.com/rajib074"></a>
          <a href="https://github.com/rajib074" class="link link-hover">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/rajibsarkar074/"
            class="link link-hover"
          >
            Linked In
          </a>
          <a href="https://www.facebook.com/rajib074" class="link link-hover">
            Facebook
          </a>
          <a href="https://twitter.com/RajibRajib074" class="link link-hover">
            Twitter
          </a>
          <a class="link link-hover">Google</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
