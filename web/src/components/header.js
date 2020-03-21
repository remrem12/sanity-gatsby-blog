import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import {Link} from 'gatsby'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./header.css";
class Header extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
        <MDBNavbar color='default-color' fixed='top' transparent light expand="md" className='header'>
          <MDBNavbarBrand>
            <Link to='/' className = 'branch-name'>
              Blognhamnhi
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left />
            <MDBNavbarNav left />
            <MDBNavbarNav left className='menu'>
              <MDBNavItem>
                <Link className="nav-link waves-effect" to="/">Trang chủ</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link className="nav-link waves-effect" to="/blogs">Blogs</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link className="nav-link waves-effect" to="/about">Nghĩa</Link>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav right className='social'>
              <li className="nav-item">
                <a href="https://www.facebook.com/hakunonn" rel="noopener noreferrer" className="nav-link  waves-effect" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <div className="text-tooltip"><span>Facebook</span></div>
              </li>

              <li className="nav-item">
                <a href="mailto:buihuunghia.10hlvc@gmail.com" rel="noopener noreferrer" className="nav-link  waves-effect" target="_blank">
                  <i className="fab fa-google"></i>
                </a>
                <div className="text-tooltip"><span>Google</span></div>
              </li>

              <li className="nav-item">
                <a href="https://twitter.com/__hei12" rel="noopener noreferrer" className="nav-link  waves-effect" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <div className="text-tooltip"><span>Twitter</span></div>
              </li>

              <li className="nav-item">
                <a href="https://github.com/remrem12" rel="noopener noreferrer" className="nav-link waves-effect" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <div className="text-tooltip"><span>Github</span></div>
              </li>

              <li className="nav-item">
                <a href="https://www.linkedin.com/in/ngh%C4%A9a-b%C3%B9i-h%E1%BB%AFu-b86004191/" rel="noopener noreferrer" className="nav-link waves-effect" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
                <div className="text-tooltip"><span>LinkedIn</span></div>
              </li>



            </MDBNavbarNav>

          </MDBCollapse>
        </MDBNavbar>
    );
  }
}

export default Header;
