import React from 'react';
import '/home/cesar/nodeprojects/clinica/src/style.css';
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import  { Link }  from 'react-router-dom';

const TopBar = () => {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope"></i> <a href="mailto:contact@example.com"><MdOutlineEmail />  clinica@ejemplo.com</a>
          <i className="bi bi-phone"></i> <FaMobileAlt /> +56 2 7854 7744
        </div>
        <i><FaFacebookSquare /></i> 
        <GrInstagram />
            <FaLinkedin />
          
        
      </div>
    </div>
  );
}

export default TopBar;
 