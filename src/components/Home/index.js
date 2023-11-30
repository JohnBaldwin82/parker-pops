import React from 'react';
import homeImage from '../../assets/images/background.jpg'

function Home() {
    return (
        <div className='home row'>
            <div className='column-left'>
                <img src={homeImage} alt='background'></img>
            </div>
            <div className='column-right'>
                <h1>Welcome to Parker Pops Co !!!</h1>                
            </div>
        </div>
    )
}

export default Home;