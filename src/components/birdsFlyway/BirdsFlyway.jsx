import { useEffect, useState } from "react";
import "./birdsFlyway.css";
import LeftSectionBirds from "./leftSectionBirds/LeftSectionBirds";
import NavbarBirds from "./navbarBirds/NavbarBirds";
import RightSectionBirds from "./rightSectionBirds/RightSectionBirds";
import bg from "../../images/birds/bg-sh.png";
import bgColor from "../../images/birds/bgColor.png";
import { birdsData } from "./birdsData";
const BirdsFlyway = () => {
    const [currentBird, setCurrentBird] = useState(0);
    const [birdInfo, setBirdInfo] = useState(birdsData[currentBird]);
    const { id, title, leftText, rightText } = birdInfo;
    useEffect(() => {
        setBirdInfo(birdsData[currentBird]);
    }, [currentBird]);
    return (
        <div
            style={{ backgroundImage: `url(${bgColor}),url(${bg})` }}
            className='page-container birds-section '>
            <LeftSectionBirds id={id} title={title} leftText={leftText} />
            <NavbarBirds
                currentBird={currentBird}
                setCurrentBird={setCurrentBird}
            />
            <RightSectionBirds id={id} rightText={rightText} />
        </div>
    );
};

export default BirdsFlyway;
