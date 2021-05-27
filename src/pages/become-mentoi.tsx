import { useRef } from 'react';
import { useRouter } from 'next/router';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { RiShieldCheckLine } from 'react-icons/ri';
import { ValidationError } from 'yup';

import { Input, InputMask, Dropzone } from '@/shared/components/FormElements';
import { Main } from '@/styles/pages/become-mentoi';
import Button from '@/shared/components/Buttons/Button';
import Header from '@/modules/logouted/components/Header';
import SEO from '@/shared/components/SEO';

import { useToast } from '@/shared/hooks/toast';

import getValidationErrors from '@/shared/utils/getValidationErros';
import { CreateSolicitation } from '@/modules/logouted/validators/CreateSolicitation';

const Feed = () => {
  const formRef = useRef<FormHandles>(null);

  const router = useRouter();
  const { addToast } = useToast();

  async function handleSubmit(data: object) {
    try {
      formRef.current?.setErrors({});

      await CreateSolicitation().validate(data, {
        abortEarly: false,
      });

      console.log(data);
      // await createUser(data);

      addToast({
        type: 'success',
        title: 'Solicitação enviada!',
        description:
          'Sua solicitação foi enviada com sucesso, em breve etaremos retornado!',
      });

      // router.push('feed');
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

        title = 'Erro ao enviar solicitação';

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
    <>
      <SEO
        title="Seja um Mentoi"
        description="O nosso objetivo é ajudar estudantes e curiosos a terem respostas didáticas e, principalmente, com CREDIBILIDADE"
      />
      <Header />
      <Main>
        <section>
          <h1>We want you!</h1>
          <p>
            &emsp; O nosso objetivo é ajudar estudantes e curiosos a terem
            respostas didáticas e, principalmente, com <b>CREDIBILIDADE</b>.
          </p>
          <p>
            &emsp;Por isso é necessário verificar sua conta e confirmar seu
            conhecimento na área, apenas assim garantimos a qualidade nas
            respostas.
          </p>
          <p>
            &emsp;Entre para o time de guerreiros uqe lutam por uma educação de
            qualidade, se transformando em uma referência no assunto.
          </p>
          <h2>Seja um Mentoi</h2>
        </section>
        <section>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input
              id="name"
              name="name"
              label="Nome"
              placeholder="Nome completo"
            />
            <Input
              id="email"
              name="email"
              label="E-mail cadastrado"
              placeholder="example@example.com"
            />

            <InputMask
              id="cpf"
              name="cpf"
              label="CPF"
              placeholder="Digite seu CPF"
              mask="999.999.999-99"
            />

            <Dropzone name="documents" label="Anexo de documentos" />

            <Input
              id="observation"
              name="observation"
              label="OBS"
              placeholder="Ex: Link Lattes, Linkedin"
            />

            <Button type="submit" text="ENVIAR" />
          </Form>
        </section>
        <RiShieldCheckLine />
      </Main>
    </>
  );
};

export default Feed;
