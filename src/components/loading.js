import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
            <div class='alert alert-primary' role='alert'>
                Loading..
                <div className='spinner-grow' role='status'>
                    <span class='sr-only'></span>
                </div>
            </div>
        )
    }
}

export default Loading;
