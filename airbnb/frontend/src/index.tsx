import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import './styles/globals.sass'
import './styles/styles.sass'

import { Layout } from 'components/Layout'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

const client = new ApolloClient({
  uri: '/graphql'
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Header />
      <Layout />
      <Footer />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
