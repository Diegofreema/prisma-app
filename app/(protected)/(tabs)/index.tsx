import { useState } from 'react';
import { Product } from '~/components/Product';

import { SearchInput } from '~/components/SearchInput';
import { ErrorComponent } from '~/components/ui/ErrorComponent';
import { Loading } from '~/components/ui/Loading';
import { Wrapper } from '~/components/ui/Wrapper';
import { useGetAllProducts } from '~/lib/tanstack/queries';

export default function Home() {
  const [value, setValue] = useState('');
  const { data, isPending, isError, refetch } = useGetAllProducts();
  const onClear = () => setValue('');
  const onChange = (value: string) => setValue(value);
  if (isError) {
    return <ErrorComponent onRefetch={refetch} />;
  }

  if (isPending) return <Loading />;

  return (
    <Wrapper>
      <SearchInput onChange={onChange} value={value} onClear={onClear} />
      <Product data={data.products} />
    </Wrapper>
  );
}
