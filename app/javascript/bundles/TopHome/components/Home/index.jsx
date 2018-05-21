import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  const replay = (e) => {
    e.preventDefault;
		const element = document.getElementById("animate");
    element.classList.remove("run-animation");
    void element.offsetWidth;
    element.classList.add("run-animation");
  };

  return (
    <div className="home">
      <ul className="nav" >
        <li className="nav-item">
          <NavLink className="nav-link" to="/portfolio"><span>hire</span> Me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blogs"><span>read</span> My Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/home"><span>control</span> My House</NavLink>
        </li>
      </ul>
      <div id="animate" className="wrapper run-animation" onClick={replay}>
        <div className="logo">

          <span className="marvel">Chau Bao</span>
          <span className="studios">Long</span>

          <div className="restart">@topcbl</div>
        </div>
      </div>

      <div className="images"></div>
    </div>
	);
};
