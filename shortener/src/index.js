import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import 'semantic-ui-css/semantic.min.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink({uri:'https://api.graph.cool/simple/v1/cjeinhxa929td01354gcjew5f'}),
  cache: new InMemoryCache(),
});

const withApolloProvider = Comp => (
  <ApolloProvider client={client}>{Comp}</ApolloProvider>
);
 
ReactDOM.render(
withApolloProvider(<Main/>), 
  document.getElementById("root")
);