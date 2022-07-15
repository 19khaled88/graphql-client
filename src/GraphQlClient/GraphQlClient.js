import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client'
const link = process.env.NEW_LIVE_SITE_LINK

const client = new ApolloClient({
  // uri: 'https://calm-dusk-38868.herokuapp.com/graphql',
  uri: `https://calm-dusk-38868.herokuapp.com/graphql`,
  // uri: 'https://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

export default client
