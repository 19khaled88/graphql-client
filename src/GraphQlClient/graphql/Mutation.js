import { gql } from '@apollo/client'

export const UPDATE_ITEM = gql`
  mutation updateUser(
    $id: String
    $name: String
    $author: String
    $price: Int
  ) {
    updateUser(_id: $id, name: $name, author: $author, price: $price) {
      message
      success
    }
  }
`

export const ADD_ITEM = gql`
  mutation createUser($name: String, $author: String, $price: Int) {
    createUser(name: $name, author: $author, price: $price) {
      message
      success
    }
  }
`

export const DELETE_ITEM = gql`
  mutation deleteUser($id: String) {
    deleteUser(_id: $id) {
      message
      success
    }
  }
`
