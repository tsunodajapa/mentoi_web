import { useState, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { FaCheck } from 'react-icons/fa';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { FaMars, FaVenus } from 'react-icons/fa';

import Button from '@/shared/Button';
import ButtonSecondary from '@/shared/ButtonSecondary';
import { Input, Select } from '@/shared/FormElements';

import { Container, Left, Right, Genero, Footer } from '@/styles/pages/signup';

import Logo from '@/assets/logo_mentoi_white.svg';

import scolarity from '@/data/scolarity';
import subjects from '@/data/subjects';
import getValidationErrors from '@/utils/getValidationErros';

const SignUp = () => {
  const formRef = useRef<FormHandles>(null);
  const [actualStep, setActualStep] = useState(1);
  const router = useRouter();

  function handleChangeStep() {
    setActualStep(state => (state === 1 ? 2 : 1));
  }

  async function handleSubmit(data) {
    try {
      formRef.current?.setErrors({});

      console.log(data);
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await api.post('/users', data);

      // addToast({
      //   type: 'success',
      //   title: 'Cadastro realizado!',
      //   description: 'Você já pode fazer seu logon no GoBarber!',
      // });

      // history.push('/');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const erros = getValidationErrors(error);

        console.log(erros);
        setActualStep(1);
        formRef.current?.setErrors(erros);
      }

      // addToast({
      //   type: 'error',
      //   title: 'Erro na cadastro',
      //   description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
      // });
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
                <div>
                  <FaCheck />
                </div>
              </li>
              <li>
                Escolaridade
                <div>
                  <FaCheck />
                </div>
              </li>
            </ul>
          </div>

          <Logo />
        </Left>

        <Right step={actualStep}>
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

                <span>Selecione seu Gênero</span>
                <Genero>
                  <input type="radio" id="male" name="gender" />
                  <label htmlFor="male">
                    <FaMars />
                    Masculino
                  </label>

                  <input type="radio" id="female" name="gender" />
                  <label htmlFor="female">
                    <FaVenus />
                    Feminino
                  </label>

                  <input type="radio" id="other" name="gender" />
                  <label htmlFor="other">Não declarar</label>
                </Genero>

                <Input type="text" id="email" name="email" label="E-mail" />

                <Input
                  type="password"
                  id="password"
                  name="password"
                  label="Senha"
                />

                <Input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
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

                <input type="checkbox" name="" id="termos" />
                <label htmlFor="termos">Concordo com os termos de uso</label>
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
                    <a href="_#">Já sou cadastrado</a>

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
    </>
  );
};

export default SignUp;
