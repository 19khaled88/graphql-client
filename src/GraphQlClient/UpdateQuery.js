import { gql } from '@apollo/client'
export const UPDATE_BOOKS = gql`
  mutation UpdateBook($name: String, $author: String, $price: Int) {
    updateBook(input: { name: $name, author: $author, price: $price }) {
      name
    }
  }
`
