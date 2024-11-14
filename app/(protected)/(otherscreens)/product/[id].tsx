import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { BottomButtons } from '~/components/BottomButtons';
import { ProductDetail } from '~/components/ProductDetail';
import { SimilarProducts } from '~/components/SimiliarProducts';
import { ErrorComponent } from '~/components/ui/ErrorComponent';
import { Loading } from '~/components/ui/Loading';
import { Wrapper } from '~/components/ui/Wrapper';
import { useGetSimilarProducts, useGetSingleProduct } from '~/lib/tanstack/queries';

const ProductDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isPending, isError, refetch } = useGetSingleProduct(id);
  const [qty, setQty] = useState(0);
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
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        <ProductDetail product={data} />
        <SimilarProducts product={similar.products} />
      </ScrollView>
      <BottomButtons id={data.id} stock={data.stock} qty={qty} />
    </Wrapper>
  );
};

export default ProductDetails;
