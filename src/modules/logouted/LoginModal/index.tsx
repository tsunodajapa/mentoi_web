import { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '@/utils/getValidationErros';
import { useAuth } from '@/hooks/auth';
import { useToast } from '@/hooks/toast';

import { Container } from '../Header/styles';

interface SignInFormData {
  email: string;
  password: string;
}

const LoginModal = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        alert('login sucesso');
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
    },
    [signIn, addToast],
  );

  return <>Teste</>;
};

export default LoginModal;
