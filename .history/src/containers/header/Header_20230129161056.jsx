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
                Our website is dedicated to providing you with the tools and resources you need to succeed in the ever-evolving world of Bitcoin and Forex trading. Our team of experts is constantly analyzing the markets and staying up to date with the latest trends, so you can make informed decisions and maximize your profits. Our cutting-edge technology and advanced trading tools are designed to make it easy for you to navigate the markets, and our in-depth market analysis will give you an edge over the competition. Whether you're a seasoned trader or just starting out, our website is the perfect resource for taking your trading to the next level.
````````````</p>

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