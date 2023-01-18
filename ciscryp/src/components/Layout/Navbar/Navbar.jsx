import React from 'react'
import Logo from "../../../assets/logo-light.efd6c8c15ce9ff0f90cc7add4d464ab1.svg"
import styledNav from './Navbar.module.css'
import { BsSearch } from "react-icons/bs";
import Moon from "../../../assets/sunny-outline-to-moon-alt-loop-transition.svg"

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className={styledNav.left_nav}>
                            <div className="logo">
                                <img src={Logo} alt="" />
                            </div>
                            <div className={styledNav.nav_search}>
                                <input type="search" id='top_search' name='search' placeholder='Search items' />
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className={styledNav.right_nav}>
                            <ul>
                                <li></li>
                            </ul>
                            <div className={styledNav.far_right_nav}>
                                <div className={styledNav.nav_search}>
                                    <span>Search</span><BsSearch />
                                </div>
                                <div className={styledNav.dl_mode}>
                                    {/* <Icon icon="line-md:sunny-outline-to-moon-alt-loop-transition" /> */}
                                    <img src={Moon} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar