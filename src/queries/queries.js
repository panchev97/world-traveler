import { gql } from 'apollo-boost';

const pullContinentsQuery = gql`
    {
        continents {
            name
            code
        }
    }
`

const pullContinentInfoQuery = gql`
    query($code: String) {
        continent(code: $code) {
            code
            name
            countries {
                name
                code
            }
        }
    }
`

const pullCountryInfoQuery = gql`
    query($code: String) {
        country(code: $code) {
            code
            name
            native
            phone
            currency
        }
    }
`

export {pullContinentsQuery, pullContinentInfoQuery, pullCountryInfoQuery};