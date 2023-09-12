import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { Aphorism } from "./aphorism";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { isDev } from '../../util/is-dev';

const productionApiUrl = "https://tome-backend.fly.dev/graphql";
const api = isDev() ? "http://localhost:8000/graphql" : productionApiUrl;

const client = new ApolloClient({
  uri: api,
  cache: new InMemoryCache(),
});

const aphorismsQuery: TypedDocumentNode<{aphorisms: GraphQL_Aphorism[]}> = gql`
  {
    aphorisms {
      id
      title
      content
      createdAt
      presentedAt
    }
  }
`;

interface GraphQL_Aphorism {
  id: string,
  title: string,
  content: string,
  createdAt: string
  presentedAt: string | undefined
}

function deserializeAphorism(aphorism: GraphQL_Aphorism) {
  return {
    ...aphorism,
    createdAt: new Date(aphorism.createdAt),
    presentedAt: aphorism.presentedAt ? new Date(aphorism.presentedAt) : undefined,
  }
}

export async function fetchAphorisms(): Promise<Aphorism[]> {
  const result = await client.query({
    query: aphorismsQuery
  });

  if (result.error) {
    throw result.error;
  }

  const converted = result.data.aphorisms.map(e => deserializeAphorism(e));
  console.log(converted);
  return converted;
}