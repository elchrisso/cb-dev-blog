import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj5dy8p2cto630122i2dchbcb'
})

const client = new ApolloClient({
  networkInterface
})

export default client