import React, { useEffect, useState } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import client from '../../GraphQlClient/GraphQlClient'
import Item from './Item'
import { ADD_ITEM } from '../../GraphQlClient/graphql/Mutation'
import { GET_ITEM_LIST } from '../../GraphQlClient//graphql/Queries'
import Update from './update'
const Home = () => {
  const [receivedData, setReceivedData] = useState([])
  const [book, setBook] = useState('')
  const [author, setAuthor] = useState('')
  const [price, setPrice] = useState('')
  const [fetched, setFetched] = useState([])
  const [modalId, setModalId] = useState('')
  const [updateInfo, setUpdateInfo] = useState('')

  // const [storeBook, { data, loading, error }] = useMutation(STORE_BOOK_MUTATION)
  const { data, refetch } = useQuery(GET_ITEM_LIST)
  const [createUser, { error }] = useMutation(ADD_ITEM)

  // useEffect(() => {
  //   client
  //     .query({
  //       query: gql`
  //         query GetBooks {
  //           getBooks {
  //             _id
  //             name
  //             author
  //             price
  //           }
  //         }
  //       `,
  //     })
  //     .then((result) => setReceivedData(result.data.getBooks))
  // }, [fetched])

  const formSubmitHandler = (e) => {
    e.preventDefault()
    client
      .mutate({
        mutation: ADD_ITEM,
        variables: {
          name: book,
          author: author,
          price: parseInt(price),
        },
      })
      .then((response) => refetch())
      .then((err) => console.log(err))
  }
  const editHandler = (id, modal) => {
    const dt = data.codeImprove.find((rd) => rd._id === id)
    if (dt) {
      setUpdateInfo(dt)
    }
    setModalId(modal)
  }

  return (
    <div className="h-screen pt-9 flex flex-col">
      <div className="pb-4 container mx-auto">
        <label
          htmlFor="my-modal-3"
          className="btn btn-primary btn-sm modal-button w-32 float-right"
        >
          Add book
        </label>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Book Name
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-start">
                Edit
              </th>
              <th scope="col" className="px-6 py-3 text-start">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.codeImprove.map((item) => (
                  <Item editHandler={editHandler} key={item._id} item={item} />
                ))
              : null}
          </tbody>
        </table>
      </div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Modal</h3>
          <form onSubmit={formSubmitHandler}>
            <label className="label">
              <span className="label-text">Book Name</span>
            </label>
            <input
              onChange={(e) => setBook(e.target.value)}
              type="text"
              placeholder="Type book name here"
              className="input input-bordered input-sm w-full"
            />
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="Type author name here"
              className="input input-bordered input-sm w-full"
            />
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              placeholder="Type price here"
              className="input input-bordered input-sm w-full"
            />
            <div className="pt-5 float-right">
              <button className="btn btn-sm ">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Update updateInfo={updateInfo} modal={modalId} />
    </div>
  )
}

export default Home
