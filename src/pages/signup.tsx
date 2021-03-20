import { useState } from 'react';
import { Form } from '@unform/web';
import { FaCheck } from 'react-icons/fa';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { FaMars, FaVenus } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/shared/Button';
import ButtonSecondary from '@/shared/ButtonSecondary';

import { Container, Left, Right, Genero, Footer } from '@/styles/pages/signup';

import Logo from '@/assets/logo_mentoi_white.svg';
import { Input, Select } from '@/shared/FormElements';

import scolarity from '@/data/scolarity';
import subjects from '@/data/subjects';

const SignUp = () => {
  const [actualStep, setActualStep] = useState(2);
  const router = useRouter();

  function handleChangeStep() {
    setActualStep(state => (state === 1 ? 2 : 1));
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
          <Form onSubmit={() => console.log('aqui')}>
            <h1>CRIE SUA CONTA</h1>

            <div>
              <div>
                <Input
                  id="name"
                  name="name"
                  label="Nome"
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
                    <FaMars /> Masculino
                  </label>

                  <input type="radio" id="female" name="gender" />
                  <label htmlFor="female">
                    <FaVenus />
                    Feminino
                  </label>

                  <input type="radio" id="other" name="gender" />
                  <label htmlFor="other">Não declarar</label>
                </Genero>

                <Input type="email" id="email" name="email" label="E-mail" />

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

                    <Button
                      type="button"
                      text="Cadastrar"
                      onClick={handleChangeStep}
                    />
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
