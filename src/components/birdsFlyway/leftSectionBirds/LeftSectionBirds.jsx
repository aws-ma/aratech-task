import PageTitle from "../../pageTitle/PageTitle";
import LeftBidrsHomeText from "./LeftBidrsHomeText";
import "./leftSecionBirds.css";
const LeftSectionBirds = ({ id, title, leftText }) => {
    const animate1 = {
        animation: "animate 2s ease-in",
    };
    return (
        <div className='l-s-birds-container'>
            <PageTitle />
            {id === "bird-home" ? (
                <LeftBidrsHomeText />
            ) : (
                <div key={id} className='l-s-birds-context' style={animate1}>
                    <h1 className='l-s-birds-title'>{title}</h1>
                    <p className='l-s-birds-text'>{leftText}</p>
                </div>
            )}
        </div>
    );
};

export default LeftSectionBirds;
