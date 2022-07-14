import { gql } from '@apollo/client'

export const GET_BOOKS = gql`
  query GetBooks {
    getBooks {
      _id
      name
      author
      price
    }
  }
`
