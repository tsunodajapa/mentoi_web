import { useRef } from 'react';
import { useRouter } from 'next/router';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '@/shared/utils/getValidationErros';
import { useAuth } from '@/shared/hooks/auth';
import { useToast } from '@/shared/hooks/toast';

import { FiLock, FiMail } from 'react-icons/fi';
import Button from '@/shared/components/Buttons/Button';
import { Input } from '@/shared/components/FormElements';
import Logo from '@/assets/logo_mentoi.svg';
import Link from 'next/link';
import { Container } from './styles';
import { CreateSessionValidator } from '../../validators/CreateSession';

interface SignInFormData {
  email: string;
  password: string;
}

const LoginModal = () => {
  const formRef = useRef<FormHandles>(null);

  const router = useRouter();
  const { signIn } = useAuth();
  const { addToast } = useToast();

  async function handleSubmit(data: SignInFormData) {
    try {
      formRef.current?.setErrors({});

      await CreateSessionValidator().validate(data, {
        abortEarly: false,
      });

      await signIn(data);

      router.push('feed');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const erros = getValidationErrors(error);

        formRef.current?.setErrors(erros);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
      });
    }
  }

  return (
    <Container>
      <div>
        <Logo />
      </div>

      <Form onSubmit={handleSubmit} ref={formRef}>
        <h2>Faça seu login</h2>

        <Input
          id="email"
          name="email"
          icon={FiMail}
          type="text"
          placeholder="E-mail"
        />

        <Input
          id="password"
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit" text="Entrar" />

        <Link href="/forgot-password">Esqueceu a senha?</Link>
      </Form>

      <div>
        <span>Ainda não é um mentoi?</span>
        <br />
        <Link href="/signup">CADASTRE-SE</Link>
      </div>
    </Container>
  );
};

export default LoginModal;
