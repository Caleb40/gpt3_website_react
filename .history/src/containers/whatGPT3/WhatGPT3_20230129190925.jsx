import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css'

const WhatGPT = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
                <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </div>

            <div>
            <div style="height:433px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F; padding: 0px; margin: 0px; width: 100%;"><div style="height:413px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=6&pref_coin_id=1505&graph=yes" width="100%" height="409px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by Coinlib</div></div>
            </div>
        </div>

    );
}

export default WhatGPT;