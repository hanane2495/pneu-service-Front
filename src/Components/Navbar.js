import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,MDBFormInline } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';

//icons
import { MdSettings } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import {FaUser} from "react-icons/fa";
import { GoSearch } from "react-icons/go";


//images
import profile from '../assets/profile1.jpg'


const Styles = styled.div`
    .navbar-layout{
        width:97%;
        background:#fff;
        border-radius:50px;
        margin-top:1%;
        margin-left:1.5%;
        transition:0.9s;
        box-shadow:5px 10px 20px 1px rgba(0, 0, 0, 0.1);

    }
    .md-form{
        border-radius:50px;
        width:100%;
        background:#db3d44;
    }
    .form-control{
        border-radius:50px 10px  10px 50px;
        border-color:#db3d44;
        width:90%;
    }
    .search-button{
        border-radius:10px 50px  50px 10px;
        border:none;
        background:#db3d44;
        color:white;
        margin-left:0.5%;
    }
    .search-section{
        width: 50%;
    }
`;

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
        <Styles>
      <MDBNavbar className='navbar-layout' expand="md">
        <MDBNavbarBrand>
          <strong style={{color:'#555'}}>Pneu service</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav>
            <MDBNavItem className='search-section'>
                <MDBFormInline waves>
                    <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Rechercher..." aria-label="Search" />
                    <button className='search-button'><GoSearch style={{ width:'1.2rem',  height:'1.2rem'}}/></button>
                    </div>
                </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/">
                <AiOutlineLogout style={{color:'#db3d44', width:'1.5rem',  height:'1.5rem', marginLeft:'0.5rem'}}/>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <Avatar alt="Djelloul Boubekri" src={profile} style={{marginLeft:'0.7rem'}}/>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </Styles>
    </Router>
    );
  }
}

export default NavbarPage;



/**
 * //icons
import { GoSearch } from "react-icons/go";
import { MdMailOutline, MdNotificationsNone } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
 */