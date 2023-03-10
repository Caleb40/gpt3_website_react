import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css'

const WhatGPT = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
                <p>Explore The library</p>
            </div>
        </div>

    );
}

export default WhatGPT;