import React from 'react';
import { GET_CHARACTERS } from '@/queries/GetCharacters';
import createApolloClient from '@/lib/apollo-client';
import InformationClient from './components/InformationClient/InformationClient';
//
interface InformationPageProps {
  searchParams?: Promise<{ page: string }> | undefined;
}

export default async function Information({
  searchParams,
}: InformationPageProps) {
  const { page } = (await searchParams) || {};
  const pageNum = parseInt(page || '1', 10);
  const apolloClient = createApolloClient();
  let data = null;
  let error = null;
  let loading = false;

  ({ data, loading, error } = await apolloClient.query({
    query: GET_CHARACTERS,
    variables: { page: pageNum },
    fetchPolicy: 'network-only',
  }));

  return (
    <InformationClient
      page={pageNum}
      data={data}
      loading={loading}
      error={error?.message || ''}
    />
  );
}
