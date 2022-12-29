import titleBg from "../../images/title-bg.png";
import "./pageTitle.css";
const PageTitle = () => {
    return (
        <div className='main-page-title'>
            <img src={titleBg} alt='' />
            <span> Bird Migration Flyways</span>
        </div>
    );
};

export default PageTitle;
