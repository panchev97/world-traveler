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
            }
        }
    }
`

export {pullContinentsQuery, pullContinentInfoQuery};