import { useRef, useState } from 'react';

import Button from '@/shared/components/Buttons/Button';
import ButtonIcon from '@/shared/components/Buttons/ButtonIcon';
import { Input, TextArea, Select } from '@/shared/components/FormElements';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import {
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
  FaMinus,
  FaYoutube,
} from 'react-icons/fa';

import { UpdateUserValidator } from '@/modules/logouted/validators/UpdateUser';
import subtractYears from '@/shared/utils/subtractYears';
import { CreateUserData, useAuth } from '@/shared/hooks/auth';

import { ValidationError } from 'yup';
import getValidationErrors from '@/shared/utils/getValidationErros';
import { useToast } from '@/shared/hooks/toast';
import { InputGroup } from './styles';
import * as userServices from '../../../logouted/services/userServices';

const ChangeProfileForm = () => {
  const formRef = useRef<FormHandles>(null);
  const [links, setLinks] = useState<String[]>(['']);

  const { user, updateUser } = useAuth();
  const { addToast } = useToast();

  function removeLink(indexToRemove: number) {
    const linksWithoutRemoveLink = links.filter(
      (_, index) => index !== indexToRemove,
    );
    setLinks(linksWithoutRemoveLink);
  }

  function addLink() {
    setLinks(oldState => [...oldState, '']);
  }

  async function handleSubmit(data: Partial<CreateUserData>) {
    try {
      formRef.current?.setErrors({});

      await UpdateUserValidator(subtractYears(6)).validate(data, {
        abortEarly: false,
      });

      if (!data.dateBirth) {
        // eslint-disable-next-line no-param-reassign
        delete data.dateBirth;
      }

      const updatedUser = await userServices.updateUser(user.id, data);

      updateUser(updatedUser);

      addToast({
        type: 'success',
        title: 'Cadastro realizado!',
        description: 'Você será redirecionado para nossa página inicial!',
      });
    } catch (error) {
      let description: string;
      let title: string;

      if (error instanceof ValidationError) {
        const erros = getValidationErrors(error);

        formRef.current?.setErrors(erros);

        title = 'Campos obrigatórios';
        description =
          'Preencha todos campos obrigatórios para concluir o cadastro';
      } else {
        const message = error.response?.data?.message || 'error';

        title = 'Erro na cadastro';

        switch (true) {
          case message.includes('Email'):
            description = 'O e-mail informado já esta sendo utilizado';
            break;
          case message.includes('NickName'):
            description = 'O Nick Name informado já esta sendo utilizado';
            break;
          default:
            description = 'Ocorreu um erro ao fazer cadastro, tente novamente';
        }
      }

      addToast({
        type: 'error',
        title,
        description,
      });
    }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input
        id="display_name"
        name="display_name"
        label="Nome de Perfil"
        placeholder="Nome que aparecerá acima do Nickname"
      />
      <Input
        id="url"
        name="url"
        label="URL personalizada"
        placeholder="Digite a url de algum site pessoal seu"
      />

      <InputGroup>
        <label htmlFor="links">Links</label>

        {links.map((_, index) => (
          <div key={index}>
            <Select
              id={`types${index}`}
              name={`types[${index}]`}
              data={[
                {
                  name: 'Linkedin',
                  key: 'linkedin',
                  icon: FaLinkedinIn,
                },
                {
                  name: 'Instagram',
                  key: 'instagram',
                  icon: FaInstagram,
                },
                {
                  name: 'Behance',
                  key: 'behance',
                  icon: FaBehance,
                },
                {
                  name: 'Youtube',
                  key: 'youtube',
                  icon: FaYoutube,
                },
              ]}
            />
            <Input
              id={`links${index}`}
              name={`links[${index}]`}
              placeholder="Digite o link do site"
            />
            <ButtonIcon
              icon={FaMinus}
              color="--color-red"
              onClick={() => removeLink(index)}
            />
          </div>
        ))}

        <Button text="Adicionar novo link" onClick={addLink} />
      </InputGroup>

      <TextArea id="summary" name="summaray" label="Resumo" rows={3} />

      <Button type="submit" text="Salvar" />
    </Form>
  );
};

export default ChangeProfileForm;
