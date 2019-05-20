import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { pullContinentInfoQuery } from '../queries/queries';
import Country from './country';
import { pullCountryInfoQuery } from '../queries/queries';



class Continent extends Component {
    constructor (props) {
      super(props);

      this.state = {
          selected: null
      }
  }
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
                    return ( 
                    <div key={country.name} className='col-md-2 bg-default list-group-item list-group-item-action mt-1 ml-1 mb-1 mr-1 list-group-item-default'>
                        {country.name}
                        <a href='#' onClick={(e) => {this.setState({selected: country.code})}} className='btn btn-block btn-info align-bottom'>Country Details</a>
                    </div>)
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
              <Country code={this.state.selected} />
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
