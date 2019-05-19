import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { pullContinentInfoQuery } from '../queries/queries';

class Continent extends Component {
  displayContinentDetails() {
    let continent = this.props.data.continent;
    if (continent) {
      return (
        <div className="container-fluid">
          <div className='row'>
              <div className='col-md-12'>
                  <h3>{continent.name}</h3>
              </div>

              {continent.countries.map(country => {
                    return <div key={country.name} className='col-md-3 bg-default'>{country.name}</div>
                  })}
          </div>
        </div>
      )
    } else {
      return (
        <div className="card">
          <div className="card-body well">
                No continent selected
          </div>
      </div>
      )
    }
  }
    render() {
        return (
            <div className='Continent'>
              {this.displayContinentDetails()}      
            </div>
        )
    }
}

export default graphql (pullContinentInfoQuery, {
    options: (props) => {
        return {
            variables: {
                code: props.code
            }
        }
    }
})(Continent);
