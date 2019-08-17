import React, { Component } from 'react'
import Nav from './../Nav/Nav';
import axios from 'axios';
import Post from './../Post/Post';
import './Blog.css';
 

 class About extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
            this.setState({
                posts: data.data
            })
        })
    }

    render() {
        return (
            <div className='blog'> 
                    <Nav />
                    <div className='blog__posts'>
                        {this.state.posts.map(post => {
                            return (
                                <Post title={post.title} desc={post.body} id={post.id} />
                            )
                        })}
                    </div> 
            </div>
        )
    }
}


export default About;