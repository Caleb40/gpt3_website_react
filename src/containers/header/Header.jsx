import React from 'react';
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>
                Trade with Confidence: Unlock the Full Potential of Bitcoin and Forex Markets.
                </h1>
                <p>
                Maximize your Bitcoin and Forex profits with our expert market analysis, advanced tools and trading technology. Unlock the full potential of the Bitcoin and Forex markets with our expert analysis, powerful trading tools, and cutting-edge technology
                </p>
                <div className='gpt3__header-content__input'>
                    <input type="email" name="" id="" placeholder='Your Email Address' />
                    <button type='button'>Get Started</button>
                </div>

                <div className='gpt3__header-content__people'>
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className='gpt3__header-image'>
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header;