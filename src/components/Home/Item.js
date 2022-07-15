import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import client from '../../GraphQlClient/GraphQlClient'
import { DELETE_ITEM } from '../../GraphQlClient/graphql/Mutation'
const Item = ({ item, editHandler }) => {
  const [deleteUser, { error }] = useMutation(DELETE_ITEM)
  const deleteHandler = (dId) => {
    client.mutate({
      mutation: DELETE_ITEM,
      variables: {
        id: dId,
      },
    })
    // .then((response) => console.log(response.data))
    // .then((err) => console.log(err))
  }
  return (
    <>
      <tr
        key={item._id}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      >
        <td
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          {item.name}
        </td>
        <td className="px-6 py-4">{item.author}</td>
        <td className="px-6 py-4">{item.price}</td>
        <td className="px-6 py-4 text-start">
          <label
            onClick={() => editHandler(item._id, 'my-edit-modal')}
            htmlFor="my-edit-modal"
            className="btn btn-warning modal-button btn-sm"
          >
            Edit
          </label>
        </td>
        <td className="px-6 py-4 text-start">
          <label
            onClick={() => deleteHandler(item._id)}
            htmlFor="my-edit-modal"
            className="btn btn-warning modal-button btn-sm"
          >
            Delete
          </label>
        </td>
      </tr>
    </>
  )
}

export default Item
