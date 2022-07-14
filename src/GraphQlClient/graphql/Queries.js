import { gql } from '@apollo/client'

export const GET_ITEM_LIST = gql`
  query {
    codeImprove {
      _id
      name
      author
      price
    }
  }
`
