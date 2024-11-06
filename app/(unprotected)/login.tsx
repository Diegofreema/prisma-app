import { LoginForm } from '~/components/form/LoginForm';
import { Title } from '~/components/ui/Title';
import { Wrapper } from '~/components/ui/Wrapper';

export default function login() {
  return (
    <Wrapper>
      <Title title="Welcome" />
      <LoginForm />
    </Wrapper>
  );
}
