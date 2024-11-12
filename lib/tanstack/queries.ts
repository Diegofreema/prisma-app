import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { ProductType } from '~/type';
export const useGetAllProducts = () => {
  return useQuery<ProductType>({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios('https://dummyjson.com/products');

      return data;
    },
  });
};
