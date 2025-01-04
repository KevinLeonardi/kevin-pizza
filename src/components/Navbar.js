import React, {useState} from "react"
import Logo from "../assets/pizzaLogo.png"
import ReorderIcon from "@mui/icons-material/Reorder"
import {Link} from "react-router"

import "../styles/Navbar.css"


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false)
  
  const toggleNavbar = () =>{
    setOpenLinks(!openLinks)
  }

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks? "LeftSide.is-open":"LeftSide.is-closed"}>
        <img src={Logo} alt="pizzeria logo"/>
        <div className="hiddenLinks">
          <Link to="/kevin-pizza/"> Home </Link>
          <Link to="/kevin-pizza/menu"> Menu </Link>
          <Link to="/kevin-pizza/about"> About </Link>
          <Link to="/kevin-pizza/contact"> Contact </Link>
        </div>
      </div>
      <div className='rightSide' id={openLinks? "RightSide.is-open":"RightSide.is-closed"}>
        <Link to="/kevin-pizza/"> Home </Link>
        <Link to="/kevin-pizza/menu"> Menu </Link>
        <Link to="/kevin-pizza/about"> About </Link>
        <Link to="/kevin-pizza/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon/>
        </button>
      </div>
    </div>
  )
}

export default Navbar
