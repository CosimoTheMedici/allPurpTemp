import { Clipboard, Home, Users,FileText } from 'react-feather';
import React, { useState } from "react";
import { Link ,useLocation } from "react-router-dom";


const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const pathname = useLocation().pathname;




  const handleMenuClick = (event, index) => {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);

    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <Home />,
      exact: true,
    },
    {
      name: "Customers",
      path: "/customers",
      icon: <Users />,
      exact: false,
    },
    {
      name: "Estimates",
      path: "/estimates",
      icon: <i data-feather="file-text"></i>,
      exact: false,
    },
    {
      name: "Invoices",
      path: "#",
      icon: <i data-feather="clipboard"></i>,
      exact: false,
      subMenuItems: [
        {
          name: "Invoices List",
          path: "/invoices",
        },
        {
          name: "Invoices Grid",
          path: "/invoice-grid",
        },
        {
          name: "Invoices Grid 2",
          path: "/invoice-grid-two",
        },
     
      ],
    },
    {
          name: "Base UI",
          path: "#",
          icon: <i data-feather="file-text"></i>,
          exact: false,
          subMenuItems: [
            { name: "Alerts", path: "/alerts" },
            { name: "Accordions", path: "/accordions" },
            { name: "Avatar", path: "/avatar" },
            { name: "Badges", path: "/badges" },
            { name: "Buttons", path: "/buttons" },
     
          ],
        },
        {
          name: "Invoices List",
          path: "/invoices",
          exact: false,
        },
   
      
      
  ];

  const renderMenuItem = (menuItem,index) => {
    if (menuItem.subMenuItems) {
      return (
        
        <li  key={index} className={  openMenuIndex === index? ' submenu active' : 'submenu'} >
          <a href="#" onClick={(event) => handleMenuClick(event, index)} className={ openMenuIndex === index? "subdrop" : ""}>
            {menuItem.icon} <span>{menuItem.name}</span>{" "}
            <span className="menu-arrow"></span>
          </a>
          <ul className={openMenuIndex === index ? "show" : ""} style={{ display: openMenuIndex === index ? "block" : "none" }}>

          {/* <ul className={isMenuOpen  && index ? "show" : ""} style={{ display: isMenuOpen ? "block" : "none" }}> */}
            {menuItem.subMenuItems.map((subMenuItem,index) => (
              <li key={index} className={`${pathname === subMenuItem.path ? 'active' : ''}`}>
                <Link to={subMenuItem.path}>{subMenuItem.name}</Link>
              </li>
            ))}
          </ul>
        </li>


      );
    } else {
      return (
        <li key={menuItem.name} className={`${pathname === menuItem.path ? 'active' : ''}`}>
          <Link
            to={menuItem.path}
            exact={menuItem.exact}
            activeClassName="active"
          >
            {menuItem.icon} <span>{menuItem.name}</span>
          </Link>
        </li>
      );
    }
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main</span>
            </li>
            {menuItems.map((menuItem,index) => renderMenuItem(menuItem,index))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
