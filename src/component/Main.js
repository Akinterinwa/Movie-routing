import '../App.css';
import { Link } from 'react-router-dom';
import profileOne from '../Media/1.jpg';
import profileTwo from '../Media/2.jpg';
import profileThree from '../Media/3.jpg';
import profileFour from '../Media/4.jpg';
import { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";




const Main = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true); 
    
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);
    


    return (
        <div className='Main'>
            {
                loading?
                <div id='loadicon'>
                <h1 className='title'>MOVIEFINDER</h1>
                <br />
                <br />
                <BeatLoader
                color={"#62eed4"}
                loading={"loading"}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              </div>
              :
              <div>
              <h1>Click Your Profile</h1>
              <div className='contain'>
                  <div className='profile'>
                      <Link to="/category">
                      <img src={profileOne} width={90} alt='profile'></img>
                      <h5>Nate</h5>
                      </Link> 
                  </div>
                  <div className='profile'>
                      <Link to="/category">
                      <img src={profileTwo} width={90} alt='profile'></img>
                      <h5>Karry</h5>
                      </Link> 
                  </div>
                  <div className='profile'>
                      <Link to="/category">
                      <img src={profileThree} width={90} alt='profile'></img>
                      <h5>Jimmy</h5>
                      </Link> 
                  </div>
                  <div className='profile'>
                      <Link to="/category">
                      <img src={profileFour} width={90} alt='profile'></img>
                      <h5>Alice</h5>
                      </Link> 
                  </div>
              </div>
              <h1>MovieFinder</h1>
              </div>
            }
                
        </div>
    );
}


export default Main;