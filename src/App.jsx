import "./App.css";
import vector from "./images/birds/vector.svg";
import BirdsFlyWay from "./components/birdsFlyway/BirdsFlyway";
import Navbar from './components/navebar/Navbar'

const App = () => {
   
    return (
    
        <div className='app-container'>
            <div className='main-container'>
                <div className="pages-container">
                <BirdsFlyWay />
                <Navbar/>
                </div>
                <img className='vector' src={vector} alt='' />
            </div>
        </div>
    );
};

export default App;
