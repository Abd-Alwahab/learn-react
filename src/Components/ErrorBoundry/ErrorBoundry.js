import React, { Component } from 'react'
import './ErrorBoundry.css'

export default class ErrorBoundry extends Component {
    
    constructor(prpos) {
        super(prpos)
        this.state = {
            hassError: false
        }
    }

    componentDidCatch(error,info) {
        this.setState({
            hassError: true
        })
    }

    render() {
        if(this.state.hassError) {
            return <h1 className='error'>☹ Oppps, something not good fox!</h1>
        }

        return this.props.children
    }
}
