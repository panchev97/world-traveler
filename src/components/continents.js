import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Loading from './loading';
import Continent from './continent';
import { pullContinentsQuery } from '../queries/queries';

class Continents extends Component {
    constructor (props) {
        super(props);

        this.state = {
            selected: null
        }
    }
    displayContinents() {
        let data = this.props.data;
        if (data.loading) {
            return (<Loading />)
        } else {
            return data.continents.map(continent => {
                return (
                    <li key={continent.name} className='list-group-item'>
                        {continent.name} <span className='badge badge-primary badge-pill'>{continent.code} </span>
                        <a href='#' onClick={(e) => {this.setState({selected: continent.code})}} className='btn btn-outline-info ml-5'>Select Continent</a>
                    </li>
                )
            });
        }
    }
    render() {
        return (
            <div className='container'>
                <Continent code={this.state.selected} />
              <ul className='list-group list-group-flush'>
                  {this.displayContinents()}
                </ul>
            </div>
        )
    }
}

export default graphql(pullContinentsQuery)(Continents)