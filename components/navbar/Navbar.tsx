import React from 'react'

import {MdKeyboardArrowDown, MdSearch, MdOutlinePersonOutline, MdOutlineShoppingCart, MdOutlineFavoriteBorder} from "react-icons/md";
import Link from "next/link";

type Props = {}

export default function Navbar({}: Props) {
    return (
       <nav className="navbar h-20">
           <div className="wrapper flex py-3 px-7 justify-between items-center">
               <div className="left flex items-center gap-6">

                <div className="nav-item text-lg sm:text-xl flex items-center">
                    <span>USD</span>
                    <MdKeyboardArrowDown/>
                </div>
                   <div className="nav-link">
                       <Link href={ "/"}>Women</Link>
                   </div>
                   <div className="nav-link">
                       <Link href={ "/"}>
                           Men
                       </Link>
                   </div>
                     <div className="nav-link">
                         <Link href={ "/"}>Children</Link>
                     </div>
               </div>
               <div className="center flex items-center gap-6 text-3xl sm:text-4xl">
                   <Link href={"/"}>
                       Tim Camp
                   </Link>
               </div>
               <div className="right flex items-center gap-6">
                   <div className="nav-link">
                       <Link href={ "/"}>About</Link>
                   </div>
                     <div className="nav-link">
                         <Link href={ "/"}>FAQ</Link>
                     </div>
                        <div className="nav-link">
                            <Link href={"/"}>Contact</Link>
                        </div>
                   <div className="icons">
                       <MdSearch />
                       <MdOutlinePersonOutline />
                       <MdOutlineFavoriteBorder />
                       <div className="cart-icon">
                           <MdOutlineShoppingCart />
                           <span>0</span>
                       </div>
                   </div>
               </div>
           </div>
       </nav>
    )
};