import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { ProductResponse, ProductType } from '~/type';
export const useGetAllProducts = () => {
  return useQuery<ProductType>({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios('https://dummyjson.com/products');

      return data;
    },
  });
};

export const useGetSingleProduct = (id: string) => {
  return useQuery<ProductResponse>({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data } = await axios(`https://dummyjson.com/products/${id}`);
      return data;
    },
  });
};
