import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, Text } from 'react-native';

import { ErrorComponent } from '~/components/ui/ErrorComponent';
import { Loading } from '~/components/ui/Loading';
import { Wrapper } from '~/components/ui/Wrapper';
import { useGetSingleProduct } from '~/lib/tanstack/queries';

const ProductDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isPending, isError, refetch } = useGetSingleProduct(id);
  if (isError) return <ErrorComponent onRefetch={refetch} />;

  if (isPending) return <Loading />;

  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>{JSON.stringify(data, null, 2)}</Text>
      </ScrollView>
    </Wrapper>
  );
};

export default ProductDetails;
