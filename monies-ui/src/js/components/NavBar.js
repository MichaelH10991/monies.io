import React, { useState } from "react"
import config from "../config"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <ul className="navigation">
        {config.nav.map((item) => (
          <li>
            <Link to={item.link ? item.link : ""}>{item.text ? item.text : ""}</Link>
          </li>
        ))}
      </ul>
      <div style={{ height: "1px", background: "black" }} />
    </div>
  )
}

export default NavBar
