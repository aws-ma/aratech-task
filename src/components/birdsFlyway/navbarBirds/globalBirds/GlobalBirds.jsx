import globalBirdsHome from "../../../../images/birds/global-birds-home.png";
import globalBirds from "../../../../images/birds/global-birds.png";
import shutterstock from "../../../../images/birds/global_birds_shutterstock.png";
import arrowRoad1 from "../../../../images/birds/arrow-road1.png";
import arrowRoad2 from "../../../../images/birds/arrow-road2.png";
import "./globalBirds.css";
const GlobalBirds = ({ currentBird }) => {
    return (
        <div>
            <div className='circular-border' 
            style={{border:`4px ${currentBird===0?'solid':'dashed'} #00ffff`}}
            >
                <div
                    className='global-birds'
                    style={{
                        background: `url(${
                            currentBird === 0 ? globalBirdsHome : globalBirds
                        })`,
                    }}>
                    {currentBird === 5 ? (
                        <img src={arrowRoad2} alt='' className='arrow-road2' />
                    ) : currentBird === 0 ? (
                        <></>
                    ) : (
                        <img className='arrow-road1' src={arrowRoad1} alt='' />
                    )}
                    <div
                        className='shutterstock'
                        style={{ background: `url(${shutterstock})` }}></div>
                </div>
            </div>
        </div>
    );
};

export default GlobalBirds;
