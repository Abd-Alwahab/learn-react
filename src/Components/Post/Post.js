import React, { Component } from 'react';
import './Post.css';

 class Post extends Component {
    render() {

        return (
           
                <div className='post'>
                     <h2>{this.props.title}</h2>
                     <p>{this.props.desc}</p> 
                </div>
            
        )
    }
}


export default Post;