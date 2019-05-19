import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import Loading from './loading';

const pullContinentsQuery = gql`
    {
        continents {
            name
            code
        }
    }
` 

class Continents extends Component {
    constructor (props) {
        super(props);

        this.onContinentClick = this.onContinentClick.bind(this);
    }
    onContinentClick(name) {
        console.log(name);
    }
    displayContinents() {
        let data = this.props.data;
        if (data.loading === true) {
            return (<Loading />)
        } else {
            return data.continents.map(continent => {
                return (
                    <li key={continent.name} className='list-group-item'>
                        {continent.name} <span className='badge badge-primary badge-pill'>{continent.code} </span>
                        <a href='#' onClick={this.onContinentClick.bind(null, continent.name)} className='btn btn-outline-info ml-5'>Continent Info</a>
                    </li>
                )
            });
        }
    }
    render() {
        return (
            <div className='container'>
              <ul className='list-group list-group-flush'>
                  {this.displayContinents()}
                </ul>
            </div>
        )
    }
}

export default graphql(pullContinentsQuery)(Continents)