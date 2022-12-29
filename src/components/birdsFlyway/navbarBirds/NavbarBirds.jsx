import React from "react";
import "./navbarBirds.css";
import GlobalBirds from "./globalBirds/GlobalBirds";
import BirdsButtons from "./birds-buttons/BirdsButtons";
const NavbarBirds = ({ setCurrentBird, currentBird }) => {
    return (
        <div className='navbar-birds'>
            <GlobalBirds currentBird={currentBird} />
            <BirdsButtons setCurrentBird={setCurrentBird} />
        </div>
    );
};

export default NavbarBirds;
