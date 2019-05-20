import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { pullCountryInfoQuery } from '../queries/queries';

class Country extends Component {
        displayCountryDetails() {
            let data = this.props.data;
            if (data.country) {
                return (
                    <div className="card border-info mb-3">
                        <div className="card-header">Selected Country Info</div>
                        <div className="card-body text-info">
                            <h5 className="card-title">Learn more about {data.country.name} </h5>
                            <p className="card-text">Code: {data.country.code}</p>
                            <p className="card-text">Native: {data.country.native}</p>
                            <p className="card-text">Phone: {data.country.phone}</p>
                            <p className="card-text">Currency: {data.country.currency}</p>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div></div>
                )
            }
            }
        render() {
            return (
                <div className='Country'>
                    {this.displayCountryDetails()}
                </div>
            )
        }
}

export default graphql (pullCountryInfoQuery, {
    options: (props) => {
        return {
            variables: {
                code: props.code
            }
        }
    }
})(Country);
