import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const menus = links.map((link) => (
    <a key={link} href={"#" + link}> {link}</a>
  ));
  return <nav>{menus}  </nav>;
}

export default NavBar;
