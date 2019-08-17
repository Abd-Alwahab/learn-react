import React, { Component } from 'react';
import Nav from './../Nav/Nav';
import './About.css';
import imageOne from '../../Media/about-1.jpg';
import imageTwo from './../../Media/about-2.png';

 class About extends Component {
    render() {
        return (
            <div className='about'>
                    <Nav />
                     <div className='about__content'>
                     
                        <div className='about__img--container'>
                            <img src={imageOne} alt='about image one' className='about__img' />
                        </div>

                        <div className='about__text'>
                            <h2 className='about__title'>How we Got Started ?</h2>
                            <p className='about__desc'>
                                Learn How to Build Wb Application was Really Good and Advanced Things that i can say i am really 
                                haap y after learing android and web application development! 
                                Learn How to Build Wb Application was Really Good and Advanced Things that i can say i am really 
                                haap y after learing android and web application development! 
                                Learn How to Build Wb Application was Really Good and Advanced Things that i can say i am really 
                                haap y after learing android and web application development! 
                            </p>
                        </div>
                     </div>

                     <div className='about__bottom'>
                        <img src={imageTwo} alt='about image two' className='about__img' />
                     </div>
            </div>
        )
    }
}


export default About;