import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native';

import { ProductDetail } from '~/components/ProductDetail';
import { SimilarProducts } from '~/components/SimiliarProducts';
import { ErrorComponent } from '~/components/ui/ErrorComponent';
import { Loading } from '~/components/ui/Loading';
import { Wrapper } from '~/components/ui/Wrapper';
import { useGetSimilarProducts, useGetSingleProduct } from '~/lib/tanstack/queries';

const ProductDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isPending, isError, refetch } = useGetSingleProduct(id);
  const {
    data: similar,
    isPending: isPendingSimilar,
    isError: isErrorSimilar,
    refetch: refetchSimilar,
  } = useGetSimilarProducts(data?.category!);
  const handleRefetch = () => {
    refetch();
    refetchSimilar();
  };
  if (isError || isErrorSimilar) return <ErrorComponent onRefetch={handleRefetch} />;

  if (isPending || isPendingSimilar) return <Loading />;

  return (
    <Wrapper>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}>
        <ProductDetail product={data} />
        <SimilarProducts product={similar.products} />
      </ScrollView>
    </Wrapper>
  );
};

export default ProductDetails;
