import React from "react";
import ticketsImage from "./../img/senketsu.png";

function Header(){
  return (
    <React.Fragment>
    <h1>Help Queue</h1>
    <img src={ticketsImage} alt="A sentient school uniform" />
    </React.Fragment>
  );
}

export default Header