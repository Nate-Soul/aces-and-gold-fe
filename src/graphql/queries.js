import { gql } from "@apollo/client";

const SAMPLE_QUERY = gql`
    {
        allProducts: {
            name
            price
        }
    }
`

export { SAMPLE_QUERY, } 