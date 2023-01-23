import React from "react";
import Logo from "../../../assets/logo-light.efd6c8c15ce9ff0f90cc7add4d464ab1.svg";
import styledNav from "./Navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { Icon } from "@iconify/react";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className={styledNav.left_nav}>
              <div className="logo">
                <a href="https://chisnghiax.com/ciscryp/home2">
                  <img src={Logo} alt="" />
                </a>
              </div>
              <div className={styledNav.nav_search}>
                <input
                  type="search"
                  id="top_search"
                  name="search"
                  placeholder="Search items"
                />
                <BsSearch />
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className={styledNav.right_nav}>
              <ul>
                <li>
                  Discover<BiChevronDown></BiChevronDown>
                </li>
                <li>Help center</li>
              </ul>
              <div className={styledNav.border_alone}></div>
              <div className={styledNav.far_right_nav}>
                <div className={styledNav.dl_mode}>
                  <Icon icon="line-md:moon-loop" />
                </div>
                <div className={styledNav.nav_blue_btn}>
                  <span>Create</span>
                </div>
                <div className={styledNav.connect}>
                  <small>Connect Wallet</small>
                </div>
                <div className={styledNav.mobile_bars}>
                  <Icon icon="humbleicons:bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
