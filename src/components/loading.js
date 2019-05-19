import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
            <div className='alert alert-primary' role='alert'>
                Loading..
                <div className='spinner-grow' role='status'>
                    <span className='sr-only'></span>
                </div>
            </div>
        )
    }
}

export default Loading;
