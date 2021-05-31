import { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { RiLock2Fill } from 'react-icons/ri';
import { ValidationError } from 'yup';

import { Input } from '@/shared/components/FormElements';
import { Main } from '@/styles/pages/password';
import Button from '@/shared/components/Buttons/Button';
import Header from '@/modules/logouted/components/Header';
import SEO from '@/shared/components/SEO';

import { useToast } from '@/shared/hooks/toast';

import getValidationErrors from '@/shared/utils/getValidationErros';
import {
  resetPassword,
  ResetPasswordData,
} from '@/modules/logouted/services/authServices';
import { useRouter } from 'next/router';
import { ResetPasswordValidator } from '@/modules/logouted/validators/ResetPassword';

const ResetPassword = () => {
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();

  const { addToast } = useToast();

  async function handleSubmit(data: Omit<ResetPasswordData, 'token'>) {
    try {
      const token = router.query.token as string;
      formRef.current?.setErrors({});

      await ResetPasswordValidator().validate(data, {
        abortEarly: false,
      });

      if (!token) {
        throw new Error();
      }

      await resetPassword({ ...data, token });

      addToast({
        type: 'success',
        title: 'Senha alterada com sucesso!',
        description: 'Clique em "Entrar", e faça login com sua nova senha.',
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        const erros = getValidationErrors(error);

        formRef.current?.setErrors(erros);

        return;
      }
      addToast({
        type: 'error',
        title: 'Erro ao restar senha',
        description: 'Ocorreu um erro ao resetar sua senha, tente novamente',
      });
    }
  }

  return (
    <>
      <SEO
        title="Resetar senha"
        description="O nosso objetivo é ajudar estudantes e curiosos a terem respostas didáticas e, principalmente, com CREDIBILIDADE"
      />
      <Header />
      <Main>
        <section>
          <h1>Resetar senha</h1>
        </section>
        <section>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input
              id="password"
              name="password"
              type="password"
              label="Nova senha"
              placeholder="Digite uma nova senha"
            />

            <Input
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
              label="Confirmação de senha"
              placeholder="confirme a senha digitado acima"
            />

            <Button type="submit" text="Atualizar senha" />
          </Form>
        </section>
        <RiLock2Fill />
      </Main>
    </>
  );
};

export default ResetPassword;
