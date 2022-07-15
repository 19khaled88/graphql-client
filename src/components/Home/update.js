import React, { useState } from 'react'
import client from '../../GraphQlClient//GraphQlClient'
import { UPDATE_ITEM } from '../../GraphQlClient/graphql/Mutation'
import { useMutation, useQuery } from '@apollo/client'
import { GET_ITEM_LIST } from '../../GraphQlClient/graphql/Queries'

const Update = ({ updateInfo, modal }) => {
  const [changeName, setChangeName] = useState('')
  const [changeAuthor, setChangeAuthor] = useState('')
  const [changePrice, setChangePrice] = useState('')
  const [updateUser, { data, loading, error }] = useMutation(UPDATE_ITEM)
  const { refetch } = useQuery(GET_ITEM_LIST)
  const formSubmitHandler = (e) => {
    e.preventDefault()
    const ifChange = [
      {
        name: changeName,
        author: changeAuthor,
        price: changePrice ? parseInt(changePrice) : '',
      },
    ]
    const arr = []
    for (let ch of Object.entries(ifChange[0])) {
      if (ch[1] !== '') {
        arr.push(ch)
      }
    }

    if (arr.length !== 0) {
      const info = Object.fromEntries(arr)
      let merged = { ...info, id: updateInfo._id }
      updateUser({
        variables: merged,
      })
        .then((response) => refetch())
        .then((err) => console.log(err))
    }
  }

  return (
    <div>
      {' '}
      <input type="checkbox" id={modal} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={modal}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Update Book info - Page</h3>
          <form onSubmit={formSubmitHandler}>
            <label className="label">
              <span className="label-text">Book Name</span>
            </label>
            <div className="flex flex-row">
              <input
                onChange={(e) => setChangeName(e.target.value)}
                type="text"
                placeholder="Type new book name here"
                className="input input-bordered input-sm w-full max-w-xs mr-3"
                defaultValue={updateInfo.name}
                key={updateInfo._id}
              />
            </div>
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <div className="flex flex-row">
              <input
                onChange={(e) => setChangeAuthor(e.target.value)}
                type="text"
                placeholder="Type new author name here"
                className="input input-bordered input-sm w-full max-w-xs mr-3"
                defaultValue={updateInfo.author}
                key={updateInfo._id}
              />
            </div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <div className="flex flex-row pb-3">
              <input
                onChange={(e) => setChangePrice(e.target.value)}
                type="text"
                placeholder="Type new price here"
                className="input input-bordered input-sm w-full max-w-xs mr-3"
                defaultValue={updateInfo.price}
                key={updateInfo._id}
              />
            </div>
            <button className="btn btn-sm">Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Update
