import { useRef, useState } from 'react';
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
  forgotPassword,
  ForgotPasswordData,
} from '@/modules/logouted/services/authServices';
import { ForgotPasswordValidator } from '@/modules/logouted/validators/ForgotPassword';

const ResetPassword = () => {
  const formRef = useRef<FormHandles>(null);
  const [wasSent, setWasSent] = useState(false);

  const { addToast } = useToast();

  async function handleSubmit(data: ForgotPasswordData) {
    try {
      formRef.current?.setErrors({});

      await ForgotPasswordValidator().validate(data, {
        abortEarly: false,
      });

      await forgotPassword(data);

      addToast({
        type: 'success',
        title: 'Solicitação enviada!',
        description: 'Sua solicitação foi enviada com sucesso',
      });

      setWasSent(true);
    } catch (error) {
      if (error instanceof ValidationError) {
        const erros = getValidationErrors(error);

        formRef.current?.setErrors(erros);
      } else if (error?.response?.status === 500) {
        addToast({
          type: 'error',
          title: 'Erro ao enviar solicitação',
          description: 'Ocorreu um erro ao enviar solicitação, tente novamente',
        });
      }
    }
  }

  function handlwSentAgain() {
    setWasSent(false);
  }

  return (
    <>
      <SEO
        title="Esqueci minha senha"
        description="O nosso objetivo é ajudar estudantes e curiosos a terem respostas didáticas e, principalmente, com CREDIBILIDADE"
      />
      <Header />
      <Main>
        <section>
          <h1>Muita calma!</h1>
          {!wasSent && <h3>Esqueceu sua senha? Encontre sua conta mentoi!</h3>}
        </section>
        <section>
          {!wasSent && (
            <Form onSubmit={handleSubmit} ref={formRef}>
              <Input
                id="email"
                name="email"
                label="Digite seu e-mail"
                placeholder="example@example.com"
              />
              <Button type="submit" text="BUSCAR" />
            </Form>
          )}

          {wasSent && (
            <>
              <p>Enviamos um e-mail para que você possa alterar sua senha.</p>
              <p>
                Caso não encontre na <b>Caixa de Entrada</b>, verifique a caixa
                de <b>Spam</b>
              </p>
              <Button
                type="button"
                text="ENVIAR NOVAMENTE"
                onClick={handlwSentAgain}
              />
            </>
          )}
        </section>
        <RiLock2Fill />
      </Main>
    </>
  );
};

export default ResetPassword;
