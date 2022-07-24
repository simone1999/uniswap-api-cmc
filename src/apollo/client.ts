import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export default new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'https://gap6p22o38.execute-api.eu-west-1.amazonaws.com/subgraphs/name/simone1999/uniswap'
  }),
  cache: new InMemoryCache()
})
