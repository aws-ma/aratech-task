const NavbarItem = ({ text, id }) => {
    return (
        <span className={`navbar-item ${id === 2 && "active"}`}>{text}</span>
    );
};

export default NavbarItem;
