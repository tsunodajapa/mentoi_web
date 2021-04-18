import { useState, useRef, useMemo } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { HiOutlineArrowLeft } from 'react-icons/hi';
import { FaMars, FaVenus } from 'react-icons/fa';

import Button from '@/shared/components/Button';
import ButtonSecondary from '@/shared/components/ButtonSecondary';
import { Input, Radio, Select } from '@/shared/components/FormElements';
import Modal from '@/shared/components/Modal';

import { Container, Left, Right, Genero, Footer } from '@/styles/pages/signup';

import Logo from '@/assets/logo_mentoi_white.svg';
import LogoWithColor from '@/assets/logo_mentoi_two_line.svg';

import scolarity from '@/data/scolarity';
import subjects from '@/data/subjects';
import getValidationErrors from '@/utils/getValidationErros';

import { useToast } from '@/hooks/toast';
import LoginModal from '@/modules/logouted/LoginModal';

const SignUp = () => {
  const formRef = useRef<FormHandles>(null);
  const [actualStep, setActualStep] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const router = useRouter();
  const { addToast } = useToast();

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  function handleChangeStep() {
    setActualStep(state => (state === 1 ? 2 : 1));
  }

  const birthDateMax = useMemo(() => {
    const someDate = new Date();
    const numberOfYearToSubtract = 6;

    someDate.setFullYear(someDate.getFullYear() - numberOfYearToSubtract);
    return someDate;
  }, []);

  async function handleSubmit(data) {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        username: Yup.string()
          .min(5, 'No mínimo 5 digitos')
          .required('Username Obrigatório'),
        birthDate: Yup.date()
          .max(birthDateMax, 'Você deve ter no mínimo 6 anos')
          .typeError('Data de nascimento obrigatório'),
        gender: Yup.string().oneOf(
          ['male', 'female', 'other'],
          'Selecione uma opção',
        ),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        confirm_password: Yup.string().oneOf(
          [Yup.ref('password'), undefined],
          'Confirmação incorreta',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await api.post('/users', data);

      addToast({
        type: 'success',
        title: 'Cadastro realizado!',
        description: 'Você será redirecionado para nossa página inicial!',
      });

      // history.push('/');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const erros = getValidationErrors(error);

        formRef.current?.setErrors(erros);

        addToast({
          type: 'error',
          title: 'Campos obrigatórios',
          description:
            'Preencha todos campos obrigatórios para concluir o cadastro',
        });

        setActualStep(1);
      } else {
        addToast({
          type: 'error',
          title: 'Erro na cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
        });
      }
    }
  }

  return (
    <>
      <Container>
        <Left step={actualStep}>
          <Image
            src="/background_create_account.jpg"
            alt="Background"
            layout="fill"
          />

          <div>
            <button type="button" onClick={() => router.back()}>
              <HiOutlineArrowLeft />
              Voltar
            </button>

            <ul>
              <li>
                Dados pessoais
                <div />
              </li>
              <li>
                Escolaridade
                <div />
              </li>
            </ul>
          </div>

          <Logo />
        </Left>

        <Right step={actualStep}>
          <LogoWithColor />

          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>CRIE SUA CONTA</h1>

            <div>
              <div>
                <Input
                  id="name"
                  name="name"
                  label="Nome"
                  type="text"
                  placeholder="Digite seu nome completo"
                />

                <Input id="username" name="username" label="Username" />

                <Input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  label="Data de nascimento (opcional)"
                />

                <Radio
                  label="Selecione seu Gênero"
                  customComponent={Genero}
                  name="gender"
                  items={[
                    { id: 'male', descrption: 'Masculino', icon: FaMars },
                    { id: 'female', descrption: 'Feminino', icon: FaVenus },
                    { id: 'other', descrption: 'Não declarar' },
                  ]}
                />

                <Input type="text" id="email" name="email" label="E-mail" />

                <Input
                  type="password"
                  id="password"
                  name="password"
                  label="Senha"
                />

                <Input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  label="Confirmar sua senha"
                />
              </div>

              <div>
                <Select
                  id="scolarity"
                  name="scolarity"
                  label="Escolaridade (opcional)"
                  data={scolarity}
                />

                <Select
                  id="interest_area"
                  name="interest_area"
                  label="Área(s) de interesse (opcional)"
                  data={subjects}
                  multiSelect
                />

                {/* <input type="checkbox" name="" id="termos" />
                <label htmlFor="termos">Concordo com os termos de uso</label> */}
              </div>
            </div>
            <Footer>
              <div>
                {actualStep === 2 && (
                  <>
                    <ButtonSecondary
                      type="button"
                      text="Voltar"
                      onClick={handleChangeStep}
                    />

                    <Button type="submit" text="Cadastrar" />
                  </>
                )}

                {actualStep === 1 && (
                  <>
                    <Button
                      text="Já sou cadastrado"
                      onClick={handleToggleModal}
                      inline
                    />

                    <Button
                      type="button"
                      text="Próximo"
                      onClick={handleChangeStep}
                    />
                  </>
                )}
              </div>
            </Footer>
          </Form>

          <a>
            Precisa de <b>AJUDA?</b>
          </a>
        </Right>
      </Container>

      <Modal isOpenModal={isOpenModal} handleToggleModal={handleToggleModal}>
        <LoginModal />
      </Modal>
    </>
  );
};

export default SignUp;
