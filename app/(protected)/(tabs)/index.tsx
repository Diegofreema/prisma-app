import { useState } from 'react';

import { SearchInput } from '~/components/SearchInput';
import { Wrapper } from '~/components/ui/Wrapper';

export default function Home() {
  const [value, setValue] = useState('');
  const onClear = () => setValue('');
  const onChange = (value: string) => setValue(value);

  return (
    <Wrapper>
      <SearchInput onChange={onChange} value={value} onClear={onClear} />
    </Wrapper>
  );
}
