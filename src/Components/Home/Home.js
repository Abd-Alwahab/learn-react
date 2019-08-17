import React, { Component } from 'react'
import './Home.css'

 class Home extends Component {
    render() { 
        return (
            <header className='header'>
                <div className='header__box'>
                        <h1 className='header__title'>Start <span>React</span></h1>
                        <p className='header__desc'>Learn and build react Application</p>
                        <a href='' className='header__link'>Learn</a>
                </div>
            </header>
        )
    }
}


export default Home;