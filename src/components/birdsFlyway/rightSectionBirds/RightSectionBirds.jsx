import bTitleImg from "../../../images/birds/frame.png";
import RightBidrsHomeText from "./RightBidrsHomeText";
import "./rightSectionBirds.css";
const RightSectionBirds = ({ id, rightText }) => {
    const animate = {
        animation: "animate 2s ease-in",
    };
    return (
        <>
            {id === "bird-home" ? (
                <RightBidrsHomeText />
            ) : (
                <div className='r-s-birds-container' >
                    <div key={id} style={animate}>
                    <div className='r-s-birds-context'>
                        <img
                            className='r-s-birds-title-img'
                            src={bTitleImg}
                            alt=''
                        />
                        <p  className='r-s-birds-text'>
                            {rightText}
                        </p>
                    </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RightSectionBirds;
