import { useRef } from 'react';
import { useRouter } from 'next/router';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '@/shared/utils/getValidationErros';
import { useAuth } from '@/shared/hooks/auth';
import { useToast } from '@/shared/hooks/toast';

import { FiLock } from 'react-icons/fi';
import Button from '@/shared/components/Buttons/Button';
import { Input } from '@/shared/components/FormElements';
import { ChangePasswordValidator } from '@/modules/logouted/validators/ChangePassword';
import { Container } from './styles';
import {
  ChangePasswordData,
  changePassword,
} from '../../../logouted/services/userServices';

const ChangePasswordModal = () => {
  const formRef = useRef<FormHandles>(null);

  const { user } = useAuth();
  const { addToast } = useToast();

  async function handleSubmit(data: ChangePasswordData) {
    try {
      formRef.current?.setErrors({});

      await ChangePasswordValidator().validate(data, {
        abortEarly: false,
      });

      await changePassword(user.id, data);
      addToast({
        type: 'success',
        title: 'Senha atualizada com sucesso!',
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const erros = getValidationErrors(error);

        formRef.current?.setErrors(erros);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro ao atualizar senha',
        description:
          'Ocorreu um erro ao atualizar senha, cheque as credenciais',
      });
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <h2>Alterar senha</h2>

        <Input
          id="oldPassword"
          name="oldPassword"
          icon={FiLock}
          type="password"
          placeholder="Senha atual"
        />
        <Input
          id="password"
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Nova Senha"
        />
        <Input
          id="passwordConfirmation"
          name="passwordConfirmation"
          icon={FiLock}
          type="password"
          placeholder="Confirmar senha"
        />

        <Button type="submit" text="Atualizar senha" />
      </Form>
    </Container>
  );
};

export default ChangePasswordModal;
