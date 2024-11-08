import { LoginForm } from '~/components/form/LoginForm';
import { Title } from '~/components/ui/Title';
import { Wrapper } from '~/components/ui/Wrapper';

export default function register() {
  return (
    <Wrapper>
      <Title title="Welcome" />
      <LoginForm register />
    </Wrapper>
  );
}
