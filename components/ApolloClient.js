import fetch from 'node-fetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import clientConfig from '../clientConfig';

import possibleTypes from '../possibleTypes.json';
const cache = new InMemoryCache({
    possibleTypes,
});

const client = new ApolloClient({
    link: createHttpLink({
        uri: clientConfig.graphqlUrl,
        fetch: fetch
    }),
    cache: cache
});

export default client;