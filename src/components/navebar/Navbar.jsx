import NavbarItem from "./NavbarItem";
import "./navbar.css";
import homeIcon from "../../images/navbar/homeIcon.svg";
import bottomArrowIcon from "../../images/navbar/bottomArrowIcon.svg";
import NavbarCircularButton from "./NavbarCircularButton";
const navbarItemsInfo = [
    "On-ground overseas projects",
    "Globally Threatened species",
    "Migratory birds and conservation along flyways",
    "SDGs, international commitments",
    "Research and Technology",
];
const navbarCircularButtonsInfo = [bottomArrowIcon, homeIcon];
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-buttons'>
                {navbarItemsInfo.map((text, index) => {
                    return <NavbarItem key={index} id={index} text={text} />;
                })}
            </div>
            <div className='navbar-circular-buttons-container'>
                {navbarCircularButtonsInfo.map((icon, index) => {
                    return <NavbarCircularButton icon={icon} key={index} />;
                })}
            </div>
        </div>
    );
};

export default Navbar;
