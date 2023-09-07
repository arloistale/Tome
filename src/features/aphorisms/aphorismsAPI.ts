import request, { GraphQLClient, gql } from "graphql-request";
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { Aphorism } from "./aphorism";
import { parse } from "graphql";
import { createClient } from "@supabase/supabase-js";

const api = "http://localhost:8000/graphql";
//const api = "https://jtome-backend.onrender.com/graphql/";

const client = new GraphQLClient(api, {
  method: `GET`,
  jsonSerializer: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },
});

const supabaseUrl = "https://dmrrzywklppzrnzporhn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtcnJ6eXdrbHBwenJuenBvcmhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MDE4ODEsImV4cCI6MjAwOTA3Nzg4MX0.tQDYR2vNJlv7_7wHfaphrc3SEauezHI07ngGUM7HwSY";

const supabase = createClient(supabaseUrl, supabaseKey);

const aphorismsQuery = gql`
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
  created_at: string
  presented_at: string | undefined
}

function deserializeAphorism(aphorism: GraphQL_Aphorism) {
  return {
    ...aphorism,
    createdAt: new Date(aphorism.created_at),
    presentedAt: aphorism.presented_at ? new Date(aphorism.presented_at) : undefined,
  }
}

// A mock function to mimic making an async request for data
export async function fetchAphorisms(): Promise<Aphorism[]> {
  const query: TypedDocumentNode<{aphorisms: GraphQL_Aphorism[]}, never | Record<any, never>> = parse(aphorismsQuery);
  //const data = await client.request(query);

  const { data, error } = await supabase.from('aphorisms').select('*')

  if (error) {
    throw error;
  }

  const converted = data.map(e => deserializeAphorism(e));
  console.log(converted);
  return converted;
}