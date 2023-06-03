import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
export default function NavBar(props) {
  return (
    <div><nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className={`form-check form-switch text-${props.mode==='light' ? 'Dark' : 'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">DarkMode</label>
  </div>
  </nav>
  </div>
  )

}
NavBar.propTypes = {title: PropTypes.string, about: PropTypes.string}