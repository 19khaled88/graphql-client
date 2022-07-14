import { gql } from '@apollo/client'
export const STORE_BOOK_MUTATION = gql`
  mutation StoreBook($name: String, $author: String, $price: Int) {
    storeBook(input: { name: $name, author: $author, price: $price }) {
      name
    }
  }
`
