import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="to=ggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">{props.aboutText}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
              </li>

            </ul>

            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label class ="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-light" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>


    </>
  )
}

//propTypes makes sure that the props sent by the parent component has the expected dataType
//isRequired would cause error if props weren't sent by the parent component
//But if defaultProps is present then it will not produce error
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
};


//defaultProps works when props are not passed from the parent Component
Navbar.defaultProps = {
  title: "Set Your Title Here",
  aboutText: "About Us"
}
