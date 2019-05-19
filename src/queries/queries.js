import { gql } from 'apollo-boost';

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

export {pullContinentInfoQuery};